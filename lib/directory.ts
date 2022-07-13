import { parse, ParsedPath } from '../deps.ts';
import Path from './types/Path.ts';

/**
 * The full directory path such as '/home/user/dir' or 'c:\path\dir'
 * @param path the path to find the directory of
 * @returns the directory of the given path
 */
export default function directory(path: Path | ParsedPath): Path {
	if (path as ParsedPath) {
		return (path as ParsedPath).dir;
	} else {
		return parse(path as string).dir;
	}
}
