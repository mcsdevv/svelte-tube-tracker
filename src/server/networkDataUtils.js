function isLine(line, data) {
  return line && line in data.lines
}

function isStation(station, data) {
  return station && station in data.stations
}

function isStationOnLine(line, station, data) {
  return (
    isLine(line, data) && isStation(station, data) && data.stationsOnLines[line].includes(station)
  )
}

function mergeGroupedLines(line, station, data) {
  const lines = [line]

  if (station in data.sharedPlatforms) {
    const lineGroups = data.sharedPlatforms[station].filter((lineGroup) => lineGroup.includes(line))

    lineGroups.forEach((lineGroup) => lines.push(...lineGroup))
  }

  return Array.from(new Set(lines))
}

module.exports = {
  isLine,
  isStation,
  isStationOnLine,
  mergeGroupedLines,
}
