/**
 * List files in a directory.
 * @param dir the directory to list.
 * @returns
 */
export default async function listFiles(dir: string): Promise<string[]> {
	const files: string[] = [];
	for await (const dirEntry of Deno.readDir(dir)) {
		files.push(`${dir}/${dirEntry.name}`);
		if (dirEntry.isDirectory) {
			(await listFiles(`${dir}/${dirEntry.name}`)).forEach((s) => {
				files.push(s);
			});
		}
	}
	return files;
}
