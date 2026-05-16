#!/usr/bin/env python3
"""Build the neutral LifePlus Pets site from the main Pet Vitality Hub repo."""

from __future__ import annotations

import re
import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "build" / "neutral-site"


def reset_output() -> None:
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)


def copy_if_exists(source: Path, destination: Path) -> None:
    if not source.exists():
        return
    if source.is_dir():
        shutil.copytree(source, destination, dirs_exist_ok=True)
    else:
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)


def neutralize_html(content: str) -> str:
    content = re.sub(
        r"<!--\s*NEUTRO-REMOVE-START\s*-->.*?<!--\s*NEUTRO-REMOVE-END\s*-->",
        "",
        content,
        flags=re.DOTALL,
    )
    content = re.sub(
        r"/\*\s*NEUTRO-REMOVE-START\s*\*/.*?/\*\s*NEUTRO-REMOVE-END\s*\*/",
        "",
        content,
        flags=re.DOTALL,
    )
    content = content.replace(
        "https://ww1.lifeplus.com/SHVCB5/M/es/es/web-page/products?search=pets",
        "https://ww1.lifeplus.com/es/es/web-page/products?search=pets",
    )
    content = re.sub(
        r"https://ww1\.lifeplus\.com/SHVCB5/M/es/es/product-details/",
        "https://ww1.lifeplus.com/es/es/product-details/",
        content,
    )
    content = re.sub(
        r"https://www\.lifeplus\.com/SHVCB5/S/",
        "https://www.lifeplus.com/",
        content,
    )
    content = content.replace(
        "ww1.lifeplus.com/SHVCB5/M/es/es/web-page/products?search=pets",
        "ww1.lifeplus.com/es/es/web-page/products?search=pets",
    )
    content = content.replace("www.lifeplus.com/SHVCB5/S/", "www.lifeplus.com/")
    content = content.replace("ShopID SHVCB5", "LifePlus International")
    content = re.sub(r"<strong>SHVCB5</strong>", "LifePlus International", content)
    content = content.replace("SHVCB5", "LifePlus International")
    return content


def write_neutral_html(source_name: str, output_name: str) -> None:
    source = ROOT / source_name
    if not source.exists():
        return
    content = neutralize_html(source.read_text(encoding="utf-8"))
    (OUT / output_name).write_text(content, encoding="utf-8")


def build() -> None:
    reset_output()

    write_neutral_html("index.html", "index.html")
    write_neutral_html("guia.html", "guia.html")

    for folder in ["assets"]:
        copy_if_exists(ROOT / folder, OUT / folder)

    videos_neutral = ROOT / "videos-neutral"
    if videos_neutral.exists():
        copy_if_exists(videos_neutral / "index.html", OUT / "videos.html")
        copy_if_exists(videos_neutral / "index.html", OUT / "videos" / "index.html")
        copy_if_exists(videos_neutral / "media", OUT / "videos" / "media")

    print(f"Neutral site built at {OUT}")


if __name__ == "__main__":
    build()
