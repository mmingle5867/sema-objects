# SEMA Foundation scope

Foundation supplies portable object contracts shared by many applications: organization, user, workspace, item, artwork, asset, asset version, storage location, category, and document.

It does not issue IDs, run commands, select providers, own application workflows, persist data, render user interfaces, or contain graphics/listing/pricing behavior. Those responsibilities belong respectively to Core, applications, storage adapters, capability providers, and facilities.

Every exported package includes a documentation manifest. A SeloDoc capability can later collect these manifests and render human help, API references, change notes, and dependency views.
