const basepath = "https://raw.githubusercontent.com/thjxs/Notes/";
const docpath = "https://github.com/thjxs/Notes/blob/";

export async function getTableOfContents(version) {
  // const res = await fetch(`${basepath}${version}/toc.json`)
  const res = await fetch("/toc.json");
  if (res.status !== 200) {
    throw Error(
      `Got an error (${
        res.status
      }) while getting the manual table of contents: \n ${await res.text()}`
    );
  }
  return await res.json();
}

export function getFileURL(version, path) {
  return `${basepath}${version}${path}.md`;
}

export function getDocURL(version, path) {
  return `${docpath}${version}/${path}.md`;
}
