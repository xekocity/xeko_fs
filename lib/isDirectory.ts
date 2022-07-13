import Path from './types/Path.ts';

/**
 * check if path is directory
 * @returns True if given path is directory
 */
export default async function isDirectory(path: Path): Promise<boolean> {
	return Deno.lstat(path).then((f) => f.isDirectory);
}
