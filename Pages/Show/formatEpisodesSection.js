export default function (episodes) {
  return episodes.reduce((prev, curr) => {
    const idx = curr.season - 1
    const episode = {
      text: `${curr.number} · ${curr.name}`,
      episode: curr,
    }
    if (prev.length <= idx) {
      prev.push({ header: curr.season, data: [episode] })
    } else {
      prev[idx].data.push(episode)
    }
    return prev
  }, [])
}
