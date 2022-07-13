import basename from './lib/basename.ts';
import directory from './lib/directory.ts';
import exists from './lib/exists.ts';
import extension from './lib/extension.ts';
import home from './lib/home.ts';
import isDirectory from './lib/isDirectory.ts';
import isFile from './lib/isFile.ts';
import name from './lib/name.ts';
import root from './lib/root.ts';

export {
	basename,
	directory,
	exists,
	extension,
	home,
	isDirectory,
	isFile,
	name,
	root,
};

import FileHash from './lib/types/FileHash.ts';
import FilePathMap from './lib/types/FilePathMap.ts';
import Path from './lib/types/Path.ts';

export type { FileHash, FilePathMap, Path };
