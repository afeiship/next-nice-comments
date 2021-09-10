/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import View from '@jswork/styled-box';
import styled from 'styled-components';
import { Background, THEME } from '../../../../packages/index';
import 'tuicss';

// 默认配置中添加插件
Object.assign(View.defaultProps, { styled });

const ReactLiveScope = {
  THEME,
  Background,
  View,
  React,
  ...React
};

export default ReactLiveScope;
