const projects = [
  {
    title: 'Portfolio website',
    description: 'This site, tested and deployed automatically with GitHub Actions.',
    url: 'https://github.com/shaheermunawaratu/portfolio',
  },
  {
    title: 'Project two',
    description: 'Replace this with a short description.',
    url: 'https://github.com/shaheermunawaratu',
  },
  {
    title: 'Project three',
    description: 'Replace this with a short description.',
    url: 'https://github.com/shaheermunawaratu',
  },
];

const list = document.querySelector('#project-list');

for (const project of projects) {
  const card = document.createElement('article');
  card.className = 'project-card';

  const heading = document.createElement('h3');
  heading.textContent = project.title;

  const text = document.createElement('p');
  text.textContent = project.description;

  const link = document.createElement('a');
  link.href = project.url;
  link.textContent = `View ${project.title} on GitHub`;

  card.append(heading, text, link);
  list.append(card);
}

document.querySelector('#year').textContent = new Date().getFullYear();
