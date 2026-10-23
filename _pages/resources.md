---
layout: single
title: "Resources"
permalink: /resources/
author_profile: true
published: true
mathjax: true
excerpt: "Notebooks, numerical data, and supporting materials for selected research projects."
---

Notebooks, numerical data, and supporting materials for selected research projects.

## Rapidity reconstruction and BES calibration
{: #bes-hydro-calibration }

Measurements cover only part of the rapidity range in many heavy-ion collisions. Scaling patterns in charged-particle and net-proton data provide a way to reconstruct broader distributions and constrain the longitudinal dynamics of hydrodynamic models across the RHIC Beam Energy Scan.

The accompanying repository provides source data, reference curves and coefficients, and Jupyter notebooks demonstrating the transformations and reconstruction. It also includes selected model results and comparisons with measured hadron yields and mean transverse momenta in central Au+Au collisions from 7.7 to 200 GeV.

[GitHub: notebooks and data](https://github.com/LipeiDu/bes-hydro-calibration) · [Reconstruction paper](https://arxiv.org/abs/2401.00596) · [Related research]({{ '/research/#longitudinal-and-baryon-dynamics-of-qcd-matter' | relative_url }})

### From scaling to reconstructed distributions

<div class="resource-figures">
  <figure class="resource-figure">
    <a href="{{ '/research-figures/bes-hydro-calibration/net-baryon-scaling.png' | relative_url }}" aria-label="Enlarge net-baryon scaling figure">
      <img src="{{ '/research-figures/bes-hydro-calibration/net-baryon-scaling.png' | relative_url }}" alt="Projectile net-baryon estimates per participant pair versus shifted rapidity, compared with a common fitted curve." width="1800" height="1305">
    </a>
    <figcaption>
      <p><strong>Scaling across beam energies.</strong> Net-baryon estimates per participant pair after subtracting the target contribution, shown as a function of shifted rapidity $y-y_b$. The dashed curve captures the approximate scaling across collision energies.</p>
      <p class="resource-figure__links">Click figure to enlarge · <a href="{{ '/research-figures/bes-hydro-calibration/net-baryon-scaling.pdf' | relative_url }}" download>Download PDF (Fig. 3)</a></p>
    </figcaption>
  </figure>
  <figure class="resource-figure">
    <a href="{{ '/research-figures/bes-hydro-calibration/net-proton-reconstruction.png' | relative_url }}" aria-label="Enlarge net-proton reconstruction figure">
      <img src="{{ '/research-figures/bes-hydro-calibration/net-proton-reconstruction.png' | relative_url }}" alt="Net-proton rapidity reconstructions at 17.3, 62.4, 130 and 200 GeV, compared with experimental inputs." width="1800" height="1342">
    </a>
    <figcaption>
      <p><strong>Reconstructing net-proton distributions.</strong> Reconstructed net-proton rapidity distributions at four collision energies. Markers show experimental inputs; dashed curves show the reconstructions obtained by restoring the target contribution and converting back to net-proton units.</p>
      <p class="resource-figure__links">Click figure to enlarge · <a href="{{ '/research-figures/bes-hydro-calibration/net-proton-reconstruction.pdf' | relative_url }}" download>Download PDF (Fig. 4)</a></p>
    </figcaption>
  </figure>
</div>

Figures 3 and 4 from L. Du, *Physical Review C* **110**, 014904 (2024), [arXiv:2401.00596](https://arxiv.org/abs/2401.00596).
