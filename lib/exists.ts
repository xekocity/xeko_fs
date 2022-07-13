import Path from './types/Path.ts';

/**
 * Check if the given path exists on the file system using Deno.stat.
 * A Deno.FileInfo is created from the call and returned along with a promise
 * @param path the path to check
 * @returns a promise that resolves to a [boolean,Deno.FileInfo] tuple.
 * The boolean is true if the path exists and false if it does not.
 */
export default function exists(path: Path): Promise<[boolean, Deno.FileInfo]> {
	return Deno.stat(path).then((f) => [f.isFile || f.isDirectory, f]);
}
