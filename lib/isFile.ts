import Path from './types/Path.ts';

/**
 * check if path is directory
 * @param path the given path to check
 * @returns True if given path is directory
 */
export default async function isFile(path: Path): Promise<boolean> {
	return Deno.lstat(path).then((f) => f.isFile);
}
