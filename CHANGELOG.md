# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.13](https://github.com/f3rno64/http-server-md/compare/v1.1.12...v1.1.13) (2024-02-14)


### Bug Fixes

* add pnpm-lock.yaml to .prettierignore ([41b6224](https://github.com/f3rno64/http-server-md/commit/41b6224d17c0c5f1f8d2858dd91ff2fe7789a98d))

### [1.1.12](https://github.com/f3rno64/http-server-md/compare/v1.1.11...v1.1.12) (2024-02-14)

### [1.1.11](https://github.com/f3rno64/http-server-md/compare/v1.1.10...v1.1.11) (2024-02-10)


### Bug Fixes

* only run format:prettier:check in workflows ([12efd8b](https://github.com/f3rno64/http-server-md/commit/12efd8bef9d86796bcdff9408672cdc071f6fe62))

### [1.1.10](https://github.com/f3rno64/http-server-md/compare/v1.1.9...v1.1.10) (2024-02-10)

### [1.1.9](https://github.com/f3rno64/http-server-md/compare/v1.1.8...v1.1.9) (2024-02-10)


### Bug Fixes

* correct lint script names in publish workflow ([25ff465](https://github.com/f3rno64/http-server-md/commit/25ff465e4e9ebf07d3fb74038ed90b5faded6844))

### [1.1.8](https://github.com/f3rno64/http-server-md/compare/v1.1.7...v1.1.8) (2024-02-10)


### Bug Fixes

* run only format:prettier:check in publish workflow ([ead0672](https://github.com/f3rno64/http-server-md/commit/ead0672e4f4e851cf9000ab30e1b82cc630fdd0a))

### [1.1.7](https://github.com/f3rno64/http-server-md/compare/v1.1.6...v1.1.7) (2024-02-10)


### Bug Fixes

* try yet another publish workflow... ([1b0075b](https://github.com/f3rno64/http-server-md/commit/1b0075b588c7bd6b0b82d4975e0029edd8c0c0cb))

### [1.1.6](https://github.com/f3rno64/http-server-md/compare/v1.1.5...v1.1.6) (2024-02-10)


### Bug Fixes

* try another publish workflow... ([bb6ded0](https://github.com/f3rno64/http-server-md/commit/bb6ded06457f68fa2d71a8859faff568c7fc93b5))

### [1.1.5](https://github.com/f3rno64/http-server-md/compare/v1.1.4...v1.1.5) (2024-02-10)


### Bug Fixes

* try "publish-with-pnpm" action from GH marketplace to fix auth issue ([fdeac45](https://github.com/f3rno64/http-server-md/commit/fdeac45c8822649fbfc773df254174fa0d327bb8))

### [1.1.4](https://github.com/f3rno64/http-server-md/compare/v1.1.3...v1.1.4) (2024-02-10)

### [1.1.3](https://github.com/f3rno64/http-server-md/compare/v1.1.2...v1.1.3) (2024-02-10)


### Bug Fixes

* run format and lint:fix ([c6ecfc1](https://github.com/f3rno64/http-server-md/commit/c6ecfc1b516bba2297e811f1b332a5005bbecbc5))

### [1.1.2](https://github.com/f3rno64/http-server-md/compare/v1.1.1...v1.1.2) (2024-02-10)


### Bug Fixes

* match description in manifest with readme title ([28aae38](https://github.com/f3rno64/http-server-md/commit/28aae38201a8796ea0b440c08dfc68592a2d2102))
* **README:** pnpm global install command ([543fb7f](https://github.com/f3rno64/http-server-md/commit/543fb7fd027ab9dc6846d190864175950edd3c91))

### [1.1.1](https://github.com/f3rno64/http-server-md/compare/v1.1.0...v1.1.1) (2024-02-10)

## [1.1.0](https://github.com/f3rno64/http-server-md/compare/v1.0.5...v1.1.0) (2024-02-10)


### Features

* add GitHub CI and NPM Publish workflows ([6796324](https://github.com/f3rno64/http-server-md/commit/679632458148047ae653bb9a7d471423604b0689))
* add linters & formatters that are used via a hook with lint-staged ([7c78b74](https://github.com/f3rno64/http-server-md/commit/7c78b74612d2e836262502cd5c93b4ab36e488a0))
* **manifest:** upgrade min node version to v16 ([e6e938f](https://github.com/f3rno64/http-server-md/commit/e6e938f0bd73133f60b81fd2549c3c2cc6ccd068))
* update .gitignore ([11cb966](https://github.com/f3rno64/http-server-md/commit/11cb966793e5eda0e45bd91d6e78ad8ef00f4390))
* wrap y.parse() call in promise catch handler to log error in cli.js ([c1d56c6](https://github.com/f3rno64/http-server-md/commit/c1d56c65a46c2e70cdfb280dc6e2120b9972f8fc))


### Bug Fixes

* handle case where user config is missing template or md fields ([7a777f7](https://github.com/f3rno64/http-server-md/commit/7a777f77970810df732cf7030dfdb50f77cbfcc0))
* replace ESM-only update-notifier with simple-update-notifier ([f96cc77](https://github.com/f3rno64/http-server-md/commit/f96cc772fc79186aa0f56012626a26b8a67c4ff7))

### [1.0.5](https://github.com/f3rno64/http-server-md/compare/v1.0.4...v1.0.5) (2020-07-04)


### Bug Fixes

* prefer greatest ver in update-deps ([c461518](https://github.com/f3rno64/http-server-md/commit/c461518511a6300b1fb1a3c2581d543149c6f7da))
* rm vestigial func ([665b494](https://github.com/f3rno64/http-server-md/commit/665b49471fdc2f454033640b0c69bd44bbb71d6c))

### [1.0.4](https://github.com/f3rno64/http-server-md/compare/v1.0.3...v1.0.4) (2020-06-28)


### Bug Fixes

* bump yargs, way outdated ([1e0d7cc](https://github.com/f3rno64/http-server-md/commit/1e0d7ccd9cdd68c71f3ecbbe4230f9c98570d8f9))

### [1.0.3](https://github.com/f3rno64/http-server-md/compare/v1.0.1...v1.0.3) (2020-06-28)


### Bug Fixes

* check CWD for configured modules ([55f3445](https://github.com/f3rno64/http-server-md/commit/55f3445da4eb0f21ca4e303e8412f9d4250f5729))

### [1.0.2](https://github.com/f3rno64/http-server-md/compare/v1.0.1...v1.0.2) (2020-06-28)


### Bug Fixes

* check CWD for configured modules ([55f3445](https://github.com/f3rno64/http-server-md/commit/55f3445da4eb0f21ca4e303e8412f9d4250f5729))

### 1.0.1 (2020-06-27)
