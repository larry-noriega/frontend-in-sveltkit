import { redirect } from '@sveltejs/kit';
import { VITE_REDIRECT_URL } from '$env/static/private';

export async function load() {
  const redirectUrl = VITE_REDIRECT_URL; 
  if (!redirectUrl) {
    throw redirect(302, '/'); 
  }
  throw redirect(302, redirectUrl);
}