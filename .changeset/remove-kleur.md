---
"goldies": patch
---

Remove the unused `kleur` dependency. Nothing in goldies imported it, but every install pulled it in. goldies now has no runtime dependencies.
