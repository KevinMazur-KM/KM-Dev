# Writing Visual Catalog

All artwork is static SVG with a `520 x 240` view box. Select visuals in Markdown front matter with the matching `family` and `image` values.

| Image | Family | Use for |
| --- | --- | --- |
| `intelligence-01` | intelligence | AI evaluation, models, signal, reasoning |
| `intelligence-02` | intelligence | Decisions, branching choices, synthesis |
| `intelligence-03` | intelligence | Inputs converging into intelligence or action |
| `systems-01` | systems | Connected systems, flow, interoperability |
| `systems-02` | systems | Architecture, platforms, technology layers |
| `systems-03` | systems | Ecosystems, dependencies, system boundaries |
| `organization-01` | organization | Teams, coordination, operating relationships |
| `organization-02` | organization | Alignment, governance, nested responsibility |
| `automation-01` | automation | Increasing capability, efficiency, progression |
| `automation-02` | automation | Repeatable workflows, feedback loops |
| `automation-03` | automation | Process consolidation, orchestration, pipelines |
| `transformation-01` | transformation | Moving from one operating state to another |
| `transformation-02` | transformation | Thresholds, change programs, transition |
| `transformation-03` | transformation | Ripples of change, adaptation, momentum |
| `building-01` | building | Scaling capability, platforms, foundations |
| `building-02` | building | Layered implementation, foundations, maturity |
| `leadership-01` | leadership | Direction, judgment, executive decisions |
| `leadership-02` | leadership | Guiding teams through complexity |
| `strategy-01` | strategy | Roadmaps, choices, paths to an outcome |
| `strategy-02` | strategy | Horizons, sequencing, long-range planning |

Example:

```yaml
visual:
  family: strategy
  image: strategy-01
```
