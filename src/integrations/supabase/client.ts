// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mwlqhhvyjbzsyotuodhx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13bHFoaHZ5amJ6c3lvdHVvZGh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MzIxMzcsImV4cCI6MjA2MDQwODEzN30.Amv3cvf8jEqJGry0dYByyyMTukM1U4qyeXdU0Rf506g";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);