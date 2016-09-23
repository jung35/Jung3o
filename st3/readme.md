#Jung's Sublime Text 3 Config

![st3_screen]

[st3_screen]:http://i.imgur.com/RH8dsYP.png

##Plugins
```JSON
	"installed_packages":
	[
		"Alignment",
		"Babel",
		"BracketHighlighter",
		"Color Highlighter",
		"DocBlockr",
		"Emmet",
		"Jade",
		"LESS",
		"Material Theme",
		"Package Control",
		"Sass",
		"SideBarEnhancements",
		"Siteleaf Liquid Syntax",
		"Stupid Indent",
		"Stylus",
		"SublimeCodeIntel",
		"SublimeLinter",
		"SublimeLinter-php"
	]
```

##Config
#####Preferences.sublime-settings
```JSON
{
	"caret_extra_width": 1,
	"caret_style": "phase",
	"close_windows_when_empty": false,
	"color_scheme": "Packages/Material Theme/schemes/Material-Theme-Darker.tmTheme",
	"copy_with_empty_selection": false,
	"drag_text": true,
	"draw_minimap_border": true,
	"draw_white_space": "all",
	"enable_tab_scrolling": false,
	"ensure_newline_at_eof_on_save": false,
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
	"indent_guide_options":
	[
		"draw_normal",
		"draw_active"
	],
	"indent_to_bracket": true,
	"line_padding_bottom": 1,
	"line_padding_top": 1,
	"match_brackets_content": true,
	"match_selection": true,
	"match_tags": true,
	"material_theme_accent_indigo": true,
	"material_theme_small_tab": true,
	"mid_line_tabs": true,
	"open_files_in_new_window": false,
	"overlay_scroll_bars": "enabled",
	"preview_on_click": true,
	"rulers": [],
	"save_on_focus_lost": true,
	"scroll_past_end": true,
	"scroll_speed": 5.0,
	"show_full_path": false,
	"sidebar_xlarge": true,
	"tab_size": 4,
	"tabs_small": true,
	"theme": "Material-Theme-Darker.sublime-theme",
	"word_wrap": false
}
```
#####Syntax Specific Settings (Select Markdown)
```JSON
{
  "color_scheme": "Packages/Predawn/predawn-markdown.tmTheme",
  "draw_centered": true,
  "draw_indent_guides": false,
  "font_size": 10,
  "trim_trailing_white_space_on_save": false,
  "word_wrap": true,
  "wrap_width": 80
}
```
#####Stupid Indent
```JSON
{
	"configuration":
	[
		{
			"patterns": ["*.yml", "*.yaml", "*.blade.php", "*.sass", "*.less"],
			"tab_size": 2,
			"translate_tabs_to_spaces": true
		},
	]
}
```

##Info
You also are going to need to show git.exe for the plugins Git and GitGutter.
If you have github client installed and you're a Windows user, just go to `%appdata%\..\Local\GitHub\` and
click on a folder that has the word `PortableGit` and then click on bin. There, you should find the git.exe.
