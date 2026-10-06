# DeepSeek Reasoning Dial

为 **DeepSeek Harness Desktop** 提供紧凑的模型切换与推理强度滑条。界面受 Codex 启发，使用原创实现。

## 功能

- 同一个入口显示模型名与推理强度，点击模型名切换模型。
- DeepSeek 四档：**关闭 / 低 / 高 / 最高**，分别对应 `off / low / high / max`。
- 拖动或点击时自动选择最近档位，滑块与填充同步缓动；每次操作只在松手时提交。
- 普通档位显示蓝色滑条；最高档显示紫色流光，粒子仅在滑条内部运动。
- 整个弹出面板按基础尺寸的 **75%** 显示。
- 支持键盘调整、恢复模型默认强度和切换失败回退。
- 跟随宿主深浅色主题，尊重系统减少动态效果设置。
- 宿主锁定模型选择时禁用控件，在不可切换模型的子代理会话中隐藏。

模型与档位来自 Harness 的实际模型目录。插件只提交选择，不直接请求模型 API，不读取 API 密钥。

## 安装

已在 **DeepSeek Harness Desktop 0.2.0-rc.2 / Windows** 的桌面配置中安装；尚未验证其他 Harness 版本或平台。自动测试覆盖模型切换、拖动提交、失败回退、取消拖动、锁定状态与资源清理。桌面界面的最终显示效果请在安装后检查。

从仓库的 Releases 下载 `dsh-codex-controls-0.3.5.tgz`。在下载目录打开 PowerShell，执行：

```powershell
$dshCli = Join-Path $env:LOCALAPPDATA 'Programs\DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd'
& $dshCli plugin --profile desktop add '.\dsh-codex-controls-0.3.5.tgz'
```

如果安装过 `plugin-effort-slider`，先移除，避免多个控件同时出现：

```powershell
& $dshCli plugin --profile desktop remove plugin-effort-slider
```

重启 DeepSeek Harness，点击输入框附近的“模型名 + 强度”入口。

项目名为 **DeepSeek Reasoning Dial**；安装包名沿用 `dsh-codex-controls`，兼容已有安装。请使用桌面版自带的 `dsh.cmd`，避免更改另一份 Harness 配置。

## 从源码构建

需要 Node.js 20 或更高版本。

```sh
npm ci
npm test
npm run build
npm pack
```

生成的 `.tgz` 可以使用同样的安装命令。插件没有运行时 npm 依赖；React 和 Harness 服务由宿主提供，`jsdom` 仅用于开发测试。

## 卸载

```powershell
$dshCli = Join-Path $env:LOCALAPPDATA 'Programs\DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd'
& $dshCli plugin --profile desktop remove dsh-codex-controls
```

重启后恢复 Harness 原生模型入口。

## 开发

`src/controls.js` 管理交互，`src/controls.css` 定义样式，`src/client-adapter.js` 接入 Harness 的 `conversation.input.model` 插槽。运行 `npm run build` 会重建 `lib/client.js`，提交源码时请同时更新生成文件。

本项目是独立社区插件，与 DeepSeek、OpenAI 或 Codex 没有官方关联。

## License

MIT
