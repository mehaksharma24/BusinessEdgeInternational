import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://qufdmrcmmptscaqaldji.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1ZmRtcmNtbXB0c2NhcWFsZGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MDQyNjksImV4cCI6MjA5NzE4MDI2OX0.aV8q4aQGanPadC16ubVohrhV6echDK0YmmZWDCYOr74";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

