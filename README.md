<h1 align="center">
  <sup>timing-safe-compare</sup>
  <br>
  <a href="https://github.com/shahradelahi/timing-safe-compare/actions/workflows/ci.yml"><img src="https://github.com/shahradelahi/timing-safe-compare/actions/workflows/ci.yml/badge.svg?branch=main&event=push" alt="CI"></a>
  <a href="https://www.npmjs.com/package/@se-oss/timing-safe-compare"><img src="https://img.shields.io/npm/v/@se-oss/timing-safe-compare.svg" alt="NPM Version"></a>
  <a href="/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat" alt="MIT License"></a>
  <a href="https://bundlephobia.com/package/@se-oss/timing-safe-compare"><img src="https://img.shields.io/bundlephobia/minzip/@se-oss/timing-safe-compare" alt="npm bundle size"></a>
  <a href="https://packagephobia.com/result?p=@se-oss/timing-safe-compare"><img src="https://packagephobia.com/badge?p=@se-oss/timing-safe-compare" alt="Install Size"></a>
</h1>

_@se-oss/timing-safe-compare_ provides constant-time string and buffer comparison for Node.js and browsers to prevent timing attacks.

---

- [Installation](#-installation)
- [Usage](#-usage)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#license)

## 📦 Installation

```bash
npm install @se-oss/timing-safe-compare
```

<details>
<summary>Install using your favorite package manager</summary>

**pnpm**

```bash
pnpm install @se-oss/timing-safe-compare
```

**yarn**

```bash
yarn add @se-oss/timing-safe-compare
```

</details>

## 📖 Usage

### String Comparison

Compare two strings in constant time. This is useful for comparing passwords, tokens, or any other sensitive data where the length is already known or handled.

```ts
import { safeCompare } from '@se-oss/timing-safe-compare';

if (safeCompare(inputPassword, storedPassword)) {
  // Passwords match
}
```

### Buffer Comparison

Compare two `Uint8Array` (or `Buffer` in Node.js) instances in constant time. Note that both buffers must have the same length.

```ts
import { timingSafeEqual } from '@se-oss/timing-safe-compare';

const a = new Uint8Array([1, 2, 3]);
const b = new Uint8Array([1, 2, 3]);

if (timingSafeEqual(a, b)) {
  // Buffers are equal
}
```

## 📚 Documentation

For all configuration options, please see [the API docs](https://www.jsdocs.io/package/@se-oss/timing-safe-compare).

## 🤝 Contributing

Want to contribute? Awesome! To show your support is to star the project, or to raise issues on [GitHub](https://github.com/shahradelahi/timing-safe-compare).

Thanks again for your support, it is much appreciated! 🙏

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi) and [contributors](https://github.com/shahradelahi/timing-safe-compare/graphs/contributors).
