import { parse, ParsedPath } from '../deps.ts';
import Path from './types/Path.ts';

/**
 * The root of the path such as '/' or 'c:\'
 * @param path the path to find the root of
 * @returns the root of the given path
 */
export default function root(path: Path | ParsedPath): Path {
	if (path as ParsedPath) {
		return (path as ParsedPath).root;
	} else {
		return parse(path as string).root;
	}
}
