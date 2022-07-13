import { parse, ParsedPath } from '../deps.ts';
import Path from './types/Path.ts';

/**
 * The file name including extension (if any) such as 'index.html'
 * @param path the path to find basename of
 * @returns the basename of the given path
 */
export default function basename(path: Path | ParsedPath): Path {
	return (path as ParsedPath
		? (path as ParsedPath).base
		: parse(path as string).base);
}
