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
      <p>Figure 3 from L. Du, <em>Physical Review C</em> <strong>110</strong>, 014904 (2024), <a href="https://arxiv.org/abs/2401.00596">arXiv:2401.00596</a>, <a href="https://doi.org/10.1103/PhysRevC.110.014904">DOI:10.1103/PhysRevC.110.014904</a>.</p>
      <p class="resource-figure__links">Click figure to enlarge · <a href="{{ '/research-figures/bes-hydro-calibration/net-baryon-scaling.pdf' | relative_url }}" download>Download PDF (Fig. 3)</a></p>
    </figcaption>
  </figure>
  <figure class="resource-figure">
    <a href="{{ '/research-figures/bes-hydro-calibration/net-proton-reconstruction.png' | relative_url }}" aria-label="Enlarge net-proton reconstruction figure">
      <img src="{{ '/research-figures/bes-hydro-calibration/net-proton-reconstruction.png' | relative_url }}" alt="Net-proton rapidity reconstructions at 17.3, 62.4, 130 and 200 GeV, compared with experimental inputs." width="1800" height="1342">
    </a>
    <figcaption>
      <p><strong>Reconstructing net-proton distributions.</strong> Reconstructed net-proton rapidity distributions at four collision energies. Markers show experimental inputs; dashed curves show the reconstructions obtained by restoring the target contribution and converting back to net-proton units.</p>
      <p>Figure 4 from L. Du, <em>Physical Review C</em> <strong>110</strong>, 014904 (2024), <a href="https://arxiv.org/abs/2401.00596">arXiv:2401.00596</a>, <a href="https://doi.org/10.1103/PhysRevC.110.014904">DOI:10.1103/PhysRevC.110.014904</a>.</p>
      <p class="resource-figure__links">Click figure to enlarge · <a href="{{ '/research-figures/bes-hydro-calibration/net-proton-reconstruction.pdf' | relative_url }}" download>Download PDF (Fig. 4)</a></p>
    </figcaption>
  </figure>
</div>

### Calibration and related studies

These studies develop the calibration or apply the associated hydrodynamic medium to electromagnetic probes and net-proton fluctuations. Collision settings and calibration choices follow each study.

1. L. Du, “Bulk medium properties of heavy-ion collisions from the beam energy scan with a multistage hydrodynamic model,” *Phys. Rev. C* **110**, 014904 (2024). [arXiv:2401.00596](https://arxiv.org/abs/2401.00596); [DOI:10.1103/PhysRevC.110.014904](https://doi.org/10.1103/PhysRevC.110.014904).
2. J. Churchill *et al.*, “Virtual Photons Shed Light on the Early Temperature of Dense QCD Matter,” *Phys. Rev. Lett.* **132**, 172301 (2024). [arXiv:2311.06951](https://arxiv.org/abs/2311.06951); [DOI:10.1103/PhysRevLett.132.172301](https://doi.org/10.1103/PhysRevLett.132.172301).
3. L. Du, “Multimessenger study of baryon-charged QCD matter in heavy-ion collisions,” *Phys. Lett. B* **861**, 139270 (2025). [arXiv:2408.08501](https://arxiv.org/abs/2408.08501); [DOI:10.1016/j.physletb.2025.139270](https://doi.org/10.1016/j.physletb.2025.139270).
4. L. Du and U. Heinz, “Electromagnetic tomography of radial flow in the quark-gluon plasma,” *Phys. Rev. Lett.* **136**, 102301 (2026). [arXiv:2505.20752](https://arxiv.org/abs/2505.20752); [DOI:10.1103/ptyq-cs9m](https://doi.org/10.1103/ptyq-cs9m).
5. R.-z. Zhao *et al.*, “Critical net-proton number fluctuations with hydrodynamics” (2026). [arXiv:2607.26912](https://arxiv.org/abs/2607.26912); [arXiv DOI:10.48550/arXiv.2607.26912](https://doi.org/10.48550/arXiv.2607.26912).

## Radial flow and mean-$p_T$ fluctuations
{: #radial-flow-resources }

Event-by-event fluctuations of radial expansion leave correlated signals in particle momenta. These two studies use a Bayesian-calibrated multistage model within JETSCAPE to examine the momentum-dependent radial-flow observable $v_0(p_T)$ and mean-$p_T$ fluctuations. Comparisons with measurements test the model's collective dynamics and reveal how the transverse-momentum acceptance affects the observed fluctuations.

The accompanying repository provides default simulation configurations, software-version notes, selected published model results, and a Jupyter notebook for replotting Figures 1–3 of the radial-flow study with experimental comparisons.

[GitHub: configurations and notebook](https://github.com/LipeiDu/radial-flow-resources) · [Published radial-flow model data](https://zenodo.org/records/17808246) · [Related research]({{ '/research/#collective-fluctuations-and-dynamical-correlations-across-momentum-scales' | relative_url }})

### Momentum acceptance and fluctuation observables

<div class="resource-figures">
  <figure class="resource-figure">
    <a href="{{ '/research-figures/radial-flow-resources/radial-flow-charged-hadrons.png' | relative_url }}" aria-label="Enlarge charged-hadron radial-flow fluctuation figure">
      <img src="{{ '/research-figures/radial-flow-resources/radial-flow-charged-hadrons.png' | relative_url }}" alt="Charged-hadron radial-flow fluctuations versus transverse momentum in 30–40% Pb+Pb collisions at 5.02 TeV, comparing model curves with ALICE and ATLAS measurements." width="1800" height="1252">
    </a>
    <figcaption>
      <p><strong>Momentum-dependent radial-flow fluctuations.</strong> Charged-hadron $v_0(p_T)$ in 30–40% Pb+Pb collisions at 5.02 TeV. Solid curves apply the experimental lower-$p_T$ cuts; dashed curves remove the lower cut. Markers show ALICE and ATLAS measurements.</p>
      <p>Figure 2 from L. Du, <em>Physical Review C</em> <strong>113</strong>, 014901 (2026), <a href="https://arxiv.org/abs/2508.07184">arXiv:2508.07184</a>, <a href="https://doi.org/10.1103/9pvq-ph1c">DOI:10.1103/9pvq-ph1c</a>.</p>
      <p class="resource-figure__links">Click figure to enlarge · <a href="{{ '/research-figures/radial-flow-resources/radial-flow-charged-hadrons.pdf' | relative_url }}" download>Download PDF (Fig. 2)</a></p>
    </figcaption>
  </figure>
  <figure class="resource-figure">
    <a href="{{ '/research-figures/radial-flow-resources/mean-pt-fluctuations-acceptance.png' | relative_url }}" aria-label="Enlarge mean transverse momentum fluctuation figure">
      <img src="{{ '/research-figures/radial-flow-resources/mean-pt-fluctuations-acceptance.png' | relative_url }}" alt="Mean transverse momentum fluctuations versus centrality in Au+Au collisions at 200 GeV, showing model results for lower momentum cuts of 0.15 and 0.2 GeV and STAR measurements." width="1800" height="1361">
    </a>
    <figcaption>
      <p><strong>Mean-$p_T$ fluctuations and soft particles.</strong> Centrality dependence of $\sqrt{C_m}/\langle p_T\rangle$ in Au+Au collisions at 200 GeV. Model results with $0.15&lt;p_T&lt;2$ GeV and $0.2&lt;p_T&lt;2$ GeV illustrate sensitivity to the lower momentum cut; STAR data use $0.2&lt;p_T&lt;2$ GeV.</p>
      <p>Figure 1 from L. Du, <em>Physics Letters B</em> <strong>874</strong>, 140225 (2026), <a href="https://arxiv.org/abs/2512.22715">arXiv:2512.22715</a>, <a href="https://doi.org/10.1016/j.physletb.2026.140225">DOI:10.1016/j.physletb.2026.140225</a>.</p>
      <p class="resource-figure__links">Click figure to enlarge · <a href="{{ '/research-figures/radial-flow-resources/mean-pt-fluctuations-acceptance.pdf' | relative_url }}" download>Download PDF (Fig. 1)</a></p>
    </figcaption>
  </figure>
</div>

### Studies and calibration references

1. L. Du, “Characterizing radial flow fluctuations in relativistic heavy-ion collisions at top RHIC and LHC energies,” *Phys. Rev. C* **113**, 014901 (2026). [arXiv:2508.07184](https://arxiv.org/abs/2508.07184); [DOI:10.1103/9pvq-ph1c](https://doi.org/10.1103/9pvq-ph1c).
2. L. Du, “Kinematic and dynamical origins of mean-$p_T$ fluctuations in heavy-ion collisions,” *Phys. Lett. B* **874**, 140225 (2026). [arXiv:2512.22715](https://arxiv.org/abs/2512.22715); [DOI:10.1016/j.physletb.2026.140225](https://doi.org/10.1016/j.physletb.2026.140225).
3. D. Everett *et al.* (JETSCAPE), “Phenomenological constraints on the transport properties of QCD matter with data-driven model averaging,” *Phys. Rev. Lett.* **126**, 242301 (2021). [arXiv:2010.03928](https://arxiv.org/abs/2010.03928); [DOI:10.1103/PhysRevLett.126.242301](https://doi.org/10.1103/PhysRevLett.126.242301).
4. D. Everett *et al.* (JETSCAPE), “Multisystem Bayesian constraints on the transport coefficients of QCD matter,” *Phys. Rev. C* **103**, 054904 (2021). [arXiv:2011.01430](https://arxiv.org/abs/2011.01430); [DOI:10.1103/PhysRevC.103.054904](https://doi.org/10.1103/PhysRevC.103.054904).
5. D. Everett *et al.* (JETSCAPE), “Role of bulk viscosity in deuteron production in ultrarelativistic nuclear collisions,” *Phys. Rev. C* **106**, 064901 (2022). [arXiv:2203.08286](https://arxiv.org/abs/2203.08286); [DOI:10.1103/PhysRevC.106.064901](https://doi.org/10.1103/PhysRevC.106.064901).
