import Path from './types/Path.ts';
import { Result } from '../deps.ts';

/**
 * Returns the root of the path such as '/' or 'c:\'
 * @returns the home directory of the current user
 */
export default function home(): Result<Path> {
	return Deno.env.get('HOME') ||
		new Error('HOME environment variable not set');
}
