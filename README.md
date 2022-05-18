# icons

## 概述

`icons` 提供自定义的图标集。

## 安装和配置

1. 使用 `yarn` 或 `npm` 安装组件包

```shell

yarn add git+ssh:git@codefever.pgyer.com:PGYER/icons.git@latest
yarn upgrade @pgyer/icons

```

## l18n

`icons` 不包含 `l18n` 设置和内容

## a11y

`icons` 不包含 `a11y` 设置和内容

## 使用

> 注意: 需要配合 &lt;FontAwesomeIcon /&gt; 或 &lt;PIcon /&gt; 使用    
> 注意: 在使用 `彩色图标` 时, 必须配合 &lt;PIcon /&gt; 使用, 其余情况 &lt;FontAwesomeIcon /&gt; 和 &lt;PIcon /&gt; 都能满足使用要求。

1. 引入

```javascript

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconName } from '@pgyer/icons'

```

或

```javascript

import { PIcon, iconName } from '@pgyer/icons'

```

2. 调用

与 `FontAwesomeIcon` 组件使用方法相同

```jsx

<FontAwesomeIcon icon={iconName} />
<PIcon icon={iconName} />

```

## 属性列表

与 `FontAwesomeIcon` 组件属性列表相同。
