import React from "react";
import { useNavigate } from "react-router";

export interface RedirectProps {
  to: string;
  replace?: boolean;
}

// Old react-router used to have this, but they don't want you doing this anymore for SEO reasons.
// For our purposes, SEO can get stuffed, and we don't have a backing server to send appropriate
// HTTP status codes anyway.
const Redirect: React.FC<RedirectProps> = ({ to, replace = false }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(to, { replace });
  }, [to, replace, navigate]);

  return null;
};

export default Redirect;
