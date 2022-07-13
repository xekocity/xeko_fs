import { parse } from '../deps.ts';
import { ParsedPath } from '../deps.ts';
import Path from './types/Path.ts';

/**
 * The file extension (if any) such as '.html'
 * @param path the path to find the extension of
 * @returns the extension of the given path
 */
export default function extension(path: Path | ParsedPath): Path {
	if (path as ParsedPath) {
		return (path as ParsedPath).ext;
	} else {
		return parse(path as string).ext;
	}
}
