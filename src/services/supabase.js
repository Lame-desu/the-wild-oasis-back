import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rlxkawshzhjwhtkpdeqo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJseGthd3Noemhqd2h0a3BkZXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NDYxNjMsImV4cCI6MjA3NjAyMjE2M30.MrM3xSUHNh4Yjx9M4wBfGPXehEWJ6PwPSU2e-oa8xTY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
