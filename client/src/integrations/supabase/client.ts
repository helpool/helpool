import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ttdhqayjyqunkovhyfav.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0ZGhxYXlqeXF1bmtvdmh5ZmF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4Nzc5MzAsImV4cCI6MjA3MjQ1MzkzMH0.P6D4vkN2rYdQwkiVQPHmAmif7AZc2mfgM4he3ir5gR8";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});