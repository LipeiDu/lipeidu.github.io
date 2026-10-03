# Lipei Du's personal website

Jekyll source for https://lipeidu.github.io, based on Academic Pages and the
Minimal Mistakes theme by Michael Rose. The original MIT license is preserved
in `LICENSE`; third-party notices in the theme's styles, scripts, and fonts
are retained.

## Content

- `_pages/about.md`: Home, including selected teaching experience.
- `_pages/research-topics.md`: Research.
- `_pages/travel-map.md`: Presentations, with redirects from `/travel/` and `/travel-map/`.
- `assets/travel_timeline.tsv`: Presentation and event data. Redacted records
  remain intentionally hidden from the displayed table, with blank titles.
- `_data/navigation.yml`: Main navigation.

The remaining layouts, includes, styles, fonts, and map scripts support these
pages. Historical posts, galleries, downloads, and unused content are omitted.

## Local development

Run `bundle install`, then:

```sh
bundle exec jekyll serve --config _config.yml,_config.dev.yml --port 4001
```

## Repository arrangement

This website has independent Git history and lives at `website/` within the
`heavy-ion-research` meta-repository. It is registered locally as a submodule;
the replacement GitHub repository must be prepared before publishing it. The initial
history contains only the reviewed current site, not the legacy repository's
commits. Publish the website commit before updating a parent submodule pointer.
