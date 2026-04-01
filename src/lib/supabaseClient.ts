import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Mock global do Supabase para desenvolvimento
export const supabase = {
	from: () => ({
		select: () => ({ data: [], error: null }),
		insert: () => ({ data: [], error: null }),
		update: () => ({ data: [], error: null }),
		delete: () => ({ data: [], error: null }),
		// Adicione outros métodos conforme necessário
	}),
	auth: {
		signInWithPassword: async () => ({ data: { user: { id: 'mock' } }, error: null }),
		signOut: async () => ({ error: null }),
		getSession: async () => ({ data: { session: null }, error: null }),
		onAuthStateChange: (callback) => {
			// Mock: nunca chama callback, retorna unsub function
			return { data: { subscription: { unsubscribe: () => {} } }, error: null };
		},
		// Adicione outros métodos conforme necessário
	},
	// Adicione outros mocks conforme necessário
};
