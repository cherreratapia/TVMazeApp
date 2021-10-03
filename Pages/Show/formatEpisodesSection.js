export default function (episodes) {
  return episodes.reduce((prev, curr) => {
    const idx = curr.season - 1
    const episode = {
      episodeId: curr.id,
      text: `${curr.number} · ${curr.name}`,
    }
    if (prev.length <= idx) {
      prev.push({ header: curr.season, data: [episode] })
    } else {
      prev[idx].data.push(episode)
    }
    return prev
  }, [])
}
