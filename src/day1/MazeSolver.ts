const points: Point[] = []

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    // base
    if (start.y === end.y && start.x === end.x) {
        points.push(start)
        return points
    }

    points.push(start)
    return solve(maze, wall, getNextPoint(maze, points[points.length - 1], wall), end)
}

function getNextPoint(maze: string[], point: Point, wall: string): Point {
    if (maze[point.y][point.x + 1] !== wall && !points.filter(p => p.x === (point.x + 1) && p.y === point.y)[0]) {
        return { x: point.x + 1, y: point.y }
    }

    if (maze[point.y][point.x - 1] !== wall && !points.filter(p => p.x === (point.x - 1) && p.y === point.y)[0]) {
        return { x: point.x - 1, y: point.y }
    }

    return { x: point.x, y: point.y + 1 }
}
