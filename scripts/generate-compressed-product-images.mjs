import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

const source = readFileSync('src/data/products.ts', 'utf8')
const imageRegex = /image:\s*'([^']+)'/g
const allImagePaths = [...source.matchAll(imageRegex)].map((match) => match[1])
const uniqueImagePaths = [...new Set(allImagePaths)].filter((imagePath) => imagePath.startsWith('/'))

let converted = 0
let missing = 0
let failed = 0

for (const imagePath of uniqueImagePaths) {
    const inputPath = path.join('public', imagePath.slice(1))
    const outputPath = path.join(
        'public',
        'compressed',
        imagePath.slice(1).replace(/\.[^/.]+$/, '-compressed.webp')
    )

    if (!existsSync(inputPath)) {
        missing += 1
        console.log(`MISSING: ${inputPath}`)
        continue
    }

    mkdirSync(path.dirname(outputPath), { recursive: true })

    try {
        execFileSync(
            'ffmpeg',
            [
                '-loglevel',
                'error',
                '-y',
                '-i',
                inputPath,
                '-vf',
                'scale=900:-2:force_original_aspect_ratio=decrease',
                '-c:v',
                'libwebp',
                '-quality',
                '70',
                '-compression_level',
                '6',
                outputPath,
            ],
            { stdio: 'pipe' }
        )
        converted += 1
    } catch (error) {
        failed += 1
        console.log(`FAILED: ${inputPath}`)
    }
}

console.log(`Converted: ${converted}`)
console.log(`Missing: ${missing}`)
console.log(`Failed: ${failed}`)
