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

## Private visitor analytics

GoatCounter records visits on production builds only. Set
`analytics.goatcounter.site_code` in `_config.yml` to the account name from the
dashboard URL (the part before `.goatcounter.com`). Until this is configured, no
analytics script is included. Local development builds do not record visits.

Keep the GoatCounter dashboard private and leave "Allow adding visitor counts on
your website" disabled in the account's site settings. These controls are managed
in GoatCounter, not by this repository. The website does not display a counter.
No passwords or API tokens belong in the site configuration.

To exclude your own visits, use "disable for this browser" in GoatCounter's
tracking settings in each browser you use to view the website. Visit totals and
data exports are available at https://lpdu318.goatcounter.com/ after signing in.

## Repository arrangement

This website has independent Git history and lives at `website/` within the
`heavy-ion-research` meta-repository. It is registered locally as a submodule;
the replacement GitHub repository must be prepared before publishing it. The initial
history contains only the reviewed current site, not the legacy repository's
commits. Publish the website commit before updating a parent submodule pointer.
