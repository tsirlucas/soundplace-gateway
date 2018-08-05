## [1.3.3](https://github.com/tsirlucas/soundplace-gateway/compare/v1.3.2...v1.3.3) (2018-08-05)


### Bug Fixes

* **auth:** pass data_api_endpoint as env var ([8f84bee](https://github.com/tsirlucas/soundplace-gateway/commit/8f84bee))
* **graphq:** make graphql proxy debuggable ([1599524](https://github.com/tsirlucas/soundplace-gateway/commit/1599524))

## [1.3.2](https://github.com/tsirlucas/soundplace-gateway/compare/v1.3.1...v1.3.2) (2018-08-04)


### Bug Fixes

* **compose:** add network to stream and use youtube .env ([e2ca2a5](https://github.com/tsirlucas/soundplace-gateway/commit/e2ca2a5))
* **proxy:** fix problems with rewrite path ([af9b41f](https://github.com/tsirlucas/soundplace-gateway/commit/af9b41f))
* **proxy:** use http-proxy-middleware for ws support ([b51ff35](https://github.com/tsirlucas/soundplace-gateway/commit/b51ff35))

## [1.3.1](https://github.com/tsirlucas/soundplace-gateway/compare/v1.3.0...v1.3.1) (2018-07-22)


### Bug Fixes

* **cors:** add cors to gateway service ([1b749cd](https://github.com/tsirlucas/soundplace-gateway/commit/1b749cd))

# [1.3.0](https://github.com/tsirlucas/soundplace-gateway/compare/v1.2.0...v1.3.0) (2018-07-22)


### Features

* **graphql:** add graphql endpoint ([5cc39f3](https://github.com/tsirlucas/soundplace-gateway/commit/5cc39f3))

# [1.2.0](https://github.com/tsirlucas/soundplace-gateway/compare/v1.1.6...v1.2.0) (2018-07-22)


### Bug Fixes

* **db:** remove db from gateway ([49d6e7b](https://github.com/tsirlucas/soundplace-gateway/commit/49d6e7b))


### Features

* **compose:** use docker-compose to run all services ([657d167](https://github.com/tsirlucas/soundplace-gateway/commit/657d167))

## [1.1.6](https://github.com/tsirlucas/soundplace-gateway/compare/v1.1.5...v1.1.6) (2018-07-18)


### Bug Fixes

* **db:** use another tcp proxy lib ([5afccfb](https://github.com/tsirlucas/soundplace-gateway/commit/5afccfb))

## [1.1.5](https://github.com/tsirlucas/soundplace-gateway/compare/v1.1.4...v1.1.5) (2018-07-18)


### Bug Fixes

* **db:** use tcp proxy instead of http ([e5e331f](https://github.com/tsirlucas/soundplace-gateway/commit/e5e331f))

## [1.1.4](https://github.com/tsirlucas/soundplace-gateway/compare/v1.1.3...v1.1.4) (2018-07-18)


### Bug Fixes

* **pgweb:** remove pgweb ([8e6fe34](https://github.com/tsirlucas/soundplace-gateway/commit/8e6fe34))

## [1.1.3](https://github.com/tsirlucas/soundplace-gateway/compare/v1.1.2...v1.1.3) (2018-07-18)


### Bug Fixes

* **pgweb:** fix redirects for pgweb files ([cef1938](https://github.com/tsirlucas/soundplace-gateway/commit/cef1938))

## [1.1.2](https://github.com/tsirlucas/soundplace-gateway/compare/v1.1.1...v1.1.2) (2018-07-18)


### Bug Fixes

* **pgweb:** rewrite static path ([c8e1d39](https://github.com/tsirlucas/soundplace-gateway/commit/c8e1d39))

## [1.1.1](https://github.com/tsirlucas/soundplace-gateway/compare/v1.1.0...v1.1.1) (2018-07-18)


### Bug Fixes

* **db:** better routes for db endpoints ([48038db](https://github.com/tsirlucas/soundplace-gateway/commit/48038db))

# [1.1.0](https://github.com/tsirlucas/soundplace-gateway/compare/v1.0.5...v1.1.0) (2018-07-18)


### Features

* **db:** add db and pgweb endpoints ([353fa66](https://github.com/tsirlucas/soundplace-gateway/commit/353fa66))

## [1.0.5](https://github.com/tsirlucas/soundplace-gateway/compare/v1.0.4...v1.0.5) (2018-07-16)


### Bug Fixes

* **deploy:** use replication controller name ([3dc13e3](https://github.com/tsirlucas/soundplace-gateway/commit/3dc13e3))

## [1.0.4](https://github.com/tsirlucas/soundplace-gateway/compare/v1.0.3...v1.0.4) (2018-07-16)


### Bug Fixes

* **deploy:** deploy to right pod ([c9c56d3](https://github.com/tsirlucas/soundplace-gateway/commit/c9c56d3))

## [1.0.3](https://github.com/tsirlucas/soundplace-gateway/compare/v1.0.2...v1.0.3) (2018-07-16)


### Bug Fixes

* **routes:** change main route response ([fbc4dc9](https://github.com/tsirlucas/soundplace-gateway/commit/fbc4dc9))

## [1.0.2](https://github.com/tsirlucas/soundplace-gateway/compare/v1.0.1...v1.0.2) (2018-07-16)


### Bug Fixes

* **auth:** fix auth proxy variable name ([bb473c0](https://github.com/tsirlucas/soundplace-gateway/commit/bb473c0))

## [1.0.1](https://github.com/tsirlucas/soundplace-gateway/compare/v1.0.0...v1.0.1) (2018-07-16)


### Bug Fixes

* **deploy:** fix typo in deploy script ([b169006](https://github.com/tsirlucas/soundplace-gateway/commit/b169006))
* **deploy:** fix typo in deploy script ([07dd73f](https://github.com/tsirlucas/soundplace-gateway/commit/07dd73f))

# 1.0.0 (2018-07-16)


### Bug Fixes

* **scripts:** add release script ([fdcc858](https://github.com/tsirlucas/soundplace-gateway/commit/fdcc858))
* **server:** add / test request ([879529e](https://github.com/tsirlucas/soundplace-gateway/commit/879529e))
* **server:** better message on default route ([3387c00](https://github.com/tsirlucas/soundplace-gateway/commit/3387c00))
* **server:** fix default request ([24e302f](https://github.com/tsirlucas/soundplace-gateway/commit/24e302f))


### Features

* **auth:** add auth proxy ([3e79d69](https://github.com/tsirlucas/soundplace-gateway/commit/3e79d69))
* **circleci:** setup circleci ([5ac3c65](https://github.com/tsirlucas/soundplace-gateway/commit/5ac3c65))
* **semantic-release:** setup semantic-release ([42dc40d](https://github.com/tsirlucas/soundplace-gateway/commit/42dc40d))
