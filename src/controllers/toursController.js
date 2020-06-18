const tours = [
  { id: 1, title: 'Consequat incididunt non deserunt proident eu tempor magna duis qui ea cillum ullamco.', username: 'Kyle' },
  { id: 2, title: 'Quis amet eu consectetur velit labore.', username: 'alonzuman' },
  { id: 3, title: 'Occaecat do sint cupidatat amet esse.', username: 'alonzuman' },
]

const getTours = async (req, res) => res.json({
  tours
});

module.exports = { getTours }
