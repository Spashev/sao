export default function(flat) {
  const roots = [];
  const map = [];
  const id = [];
  let i;

  flat.forEach(item => {
    map.push(Object.assign({}, item));
    id.push(item.id);
  });

  map.forEach(item => {
    if (!item.id_parent || (i = id.indexOf(item.id_parent)) === -1) {
      roots.push(item);
      return;
    }

    if (map[i].children) {
      map[i].children.push(item);
    } else {
      map[i].children = [item];
    }
  });

  return roots;
}
