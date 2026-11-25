# The Best Advice I Ever Got

[![make.fun · u-pangg7-the-best-advice-i-ever-got-358cefb0](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0?utm_source=github&utm_medium=readme&utm_campaign=u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![rank](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0/cashbags/makefun-best-advice-i-ever-got/rank.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![reward](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0/cashbags/makefun-best-advice-i-ever-got/reward.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0?utm_source=github&utm_medium=readme&utm_campaign=u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)

One sentence, 144 characters, on the best advice I ever received — built for the [make.fun bounty](https://make.fun/c/u-pangg7-the-best-advice-i-ever-got-358cefb0?ref=qrg7fvky).

> My first boss set two coffees on my desk at midnight and said, "Go home now — the work will still be here, but your kid won't be seven forever."

## How it works

`main.ts` (Node 22, standard library only, no network) writes exactly that sentence to `/output/entry.txt`. The sentence is a constant literal, so every run writes byte-identical output. See `DESIGN.md` for why this line and the self-judge tournament behind it.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
