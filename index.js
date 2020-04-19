(async () => {

  const root = document.getElementById('root');
  (
    await fetch('https://cdn.matthewgrill.com/gif/storage.json')
      .then((res) => res.json())
      .then(({ files }) => files)
  ).map((path) => {
    const image = document.createElement('img');
    image.src = path;
    image.style = `width: 320px; height: ${
      path.split('-').pop() === 'mobile.gif' ? 320 : 180
    }px; margin: 10px;`;
    root.append(image);
  });
})();