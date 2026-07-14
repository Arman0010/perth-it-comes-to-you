import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State = "loading" | "valid" | "invalid" | "already" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON } }
        );
        const data = await res.json();
        if (data.valid) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        setState("error");
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) setState("success");
      else if (data?.reason === "already_unsubscribed") setState("already");
      else setState("error");
    } catch {
      setState("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full bg-card border border-border rounded-xl shadow-sm p-8 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-3">Unsubscribe</h1>
        {state === "loading" && <p className="text-muted-foreground">Checking your link…</p>}
        {state === "valid" && (
          <>
            <p className="text-muted-foreground mb-6">
              Click below to unsubscribe from Arman IT emails.
            </p>
            <Button onClick={confirm} disabled={submitting} size="lg" className="w-full">
              {submitting ? "Processing…" : "Confirm Unsubscribe"}
            </Button>
          </>
        )}
        {state === "success" && (
          <p className="text-foreground">You have been unsubscribed. Sorry to see you go.</p>
        )}
        {state === "already" && (
          <p className="text-foreground">This email is already unsubscribed.</p>
        )}
        {state === "invalid" && (
          <p className="text-destructive">This unsubscribe link is invalid or expired.</p>
        )}
        {state === "error" && (
          <p className="text-destructive">Something went wrong. Please try again later.</p>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;
