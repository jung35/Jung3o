#Jung's Sublime Text 3 Config

![http://i.imgur.com/hao8E1F.png][st3_screen]

[st3_screen]:http://i.imgur.com/hao8E1F.png

##Plugins
* [Color Highlighter](https://sublime.wbond.net/packages/Color Highlighter)
* [DocBlockr](https://sublime.wbond.net/packages/DocBlockr)
* [Emmet](https://sublime.wbond.net/packages/Emmet)
* [Git](https://sublime.wbond.net/packages/Git)
* [GitGutter](https://sublime.wbond.net/packages/GitGutter)
* [LESS](https://sublime.wbond.net/packages/LESS)
* [Predawn](https://sublime.wbond.net/packages/Predawn)
* [Sass](https://sublime.wbond.net/packages/Sass)
* [SideBarEnhancements](https://sublime.wbond.net/packages/SideBarEnhancements)
* [SublimeLinter](https://sublime.wbond.net/packages/SublimeLinter)

####Extras
* [PHP-Twig](https://sublime.wbond.net/packages/PHP-Twig)
* [Laravel Blade Highlighter](https://sublime.wbond.net/packages/Laravel Blade Highlighter)
* [SublimeLinter-csslint](https://sublime.wbond.net/packages/SublimeLinter-csslint)
* [SublimeLinter-php](https://sublime.wbond.net/packages/SublimeLinter-php)

##Config
[There is also customized theme for Predawn that you can replace with][predawn_custom]
#####Preferences.sublime-settings
```JSON
{
  "caret_extra_width": 1,
  "caret_style": "phase",
  "close_windows_when_empty": false,
  "color_scheme": "Packages/User/predawn (SL).tmTheme",
  "copy_with_empty_selection": false,
  "drag_text": false,
  "draw_minimap_border": true,
  "enable_tab_scrolling": false,
  "ensure_newline_at_eof_on_save": true,
  "findreplace_small": true,
  "font_face": "Consolas",
  "font_options":
  [
    "no_round",
    "bold",
    "subpixel_antialias"
  ],
  "font_size": 10,
  "highlight_line": true,
  "ignored_packages":
  [
    "Vintage"
  ],
  "ignored_words":
  [
    "Plugin"
  ],
  "indent_guide_options":
  [
    "draw_normal",
    "draw_active"
  ],
  "indent_to_bracket": true,
  "match_brackets_content": false,
  "match_selection": false,
  "match_tags": false,
  "open_files_in_new_window": false,
  "overlay_scroll_bars": "enabled",
  "preview_on_click": false,
  "save_on_focus_lost": true,
  "scroll_past_end": true,
  "scroll_speed": 5.0,
  "show_full_path": false,
  "tab_size": 2,
  "tabs_small": true,
  "theme": "predawn.sublime-theme",
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true,
  "word_wrap": false
}
```

##Info
You also are going to need to show git.exe for the plugins Git and GitGutter.
If you have github client installed and you're a Windows user, just go to `%appdata%\..\Local\GitHub\` and
click on a folder that has the word `PortableGit` and then click on bin. There, you should find the git.exe.

[predawn_custom]:https://github.com/jung3o/Jung3o/tree/master/st3/predawn.sublime-theme
