"Specify a directory for plugins
call plug#begin()

"VSCode intellisense
Plug 'neoclide/coc.nvim'

"Quoting/Parenthesizing
Plug 'tpope/vim-surround'

"Status bar
Plug 'vim-airline/vim-airline'

"Undo history visualizer
Plug 'mbbill/undotree'

"Start screen for vim
Plug 'mhinz/vim-startify'

"Auto save
Plug '907th/vim-auto-save'

"Css color preview
Plug 'ap/vim-css-color'

"Git plugin
Plug 'tpope/vim-fugitive'

"Auto generate ctags
Plug 'ludovicchabant/vim-gutentags'

"Comment stuffs
Plug 'tomtom/tcomment_vim'

"Git changes status in sign column
Plug 'airblade/vim-gitgutter'

"Format code
Plug 'prettier/vim-prettier'

"Theme for vim

Plug 'vim-airline/vim-airline-themes'

"Icon for Plugins ALWAYS AT LAST
Plug 'ryanoasis/vim-devicons'

" Initialize plugin system
call plug#end()


set encoding=utf8

"Displaying line for code indented with tabs
set list lcs=tab:\|\ 

"	CoC CONFIG
" if hidden is not set, TextEdit might fail.
set hidden

" Some servers have issues with backup files, see #649
set nobackup
set nowritebackup

" Better display for messages
set cmdheight=2

" You will have bad experience for diagnostic messages when it's default 4000.
set updatetime=300

" don't give |ins-completion-menu| messages.
set shortmess+=c

" Use `[g` and `]g` to navigate diagnostics
nmap <silent> [g <Plug>(coc-diagnostic-prev)
nmap <silent> ]g <Plug>(coc-diagnostic-next)

" Remap keys for gotos
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)

" Highlight symbol under cursor on CursorHold
autocmd CursorHold * silent call CocActionAsync('highlight')

" Remap for rename current word
nmap <leader>rn <Plug>(coc-rename)

" Remap for format selected region
xmap <leader>f  <Plug>(coc-format-selected)
nmap <leader>f  <Plug>(coc-format-selected)

augroup mygroup
autocmd!
" Setup formatexpr specified filetype(s).
autocmd FileType typescript,json setl formatexpr=CocAction('formatSelected')
" Update signature help on jump placeholder
autocmd User CocJumpPlaceholder call CocActionAsync('showSignatureHelp')
augroup end

" Remap for do codeAction of selected region, ex: `<leader>aap` for current paragraph
xmap <leader>a  <Plug>(coc-codeaction-selected)
nmap <leader>a  <Plug>(coc-codeaction-selected)

" Remap for do codeAction of current line
nmap <leader>ac  <Plug>(coc-codeaction)
" Fix autofix problem of current line
nmap <leader>qf  <Plug>(coc-fix-current)

" Create mappings for function text object, requires document symbols feature of languageserver.
xmap if <Plug>(coc-funcobj-i)
xmap af <Plug>(coc-funcobj-a)
omap if <Plug>(coc-funcobj-i)
omap af <Plug>(coc-funcobj-a)

" Use <TAB> for select selections ranges, needs server support, like: coc-tsserver, coc-python
nmap <silent> <TAB> <Plug>(coc-range-select)
xmap <silent> <TAB> <Plug>(coc-range-select)

" Use `:Format` to format current buffer
command! -nargs=0 Format :call CocAction('format')

" Use `:Fold` to fold current buffer
command! -nargs=? Fold :call     CocAction('fold', <f-args>)

" use `:OR` for organize import of current buffer
command! -nargs=0 OR   :call     CocAction('runCommand', 'editor.action.organizeImport')

" Add status line support, for integration with other plugin, checkout `:h coc-status`
set statusline^=%{coc#status()}%{get(b:,'coc_current_function','')}

"<cr> for confirm completion
inoremap <expr> <cr> pumvisible() ? "\<C-y>" : "\<C-g>u\<CR>"

"TAB for trigger completion, completion confirm, snippet expand and jump like VSCode
inoremap <silent><expr> <TAB>
\ pumvisible() ? coc#_select_confirm() :
\ coc#expandableOrJumpable() ? "\<C-r>=coc#rpc#request('doKeymap', ['snippets-expand-jump',''])\<CR>" :
\ <SID>check_back_space() ? "\<TAB>" :
\ coc#refresh()

function! s:check_back_space() abort
let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

let g:coc_snippet_next = '<tab>'

"Show documentation of symbol when doing cursor hover
nnoremap <silent> K :call CocActionAsync('doHover')<cr>

"	End of Coc Config



"Indent with tabs
set tabstop=2 "number of spaces per TAB
set shiftwidth=2 "same value as tabstop

"Automactically indent lines
set autoindent
set smartindent

"IndentLine
let g:indentLine_char = '▏'

"Guard for distributions lacking the persistent_undo feature.
if has('persistent_undo')
    " define a path to store persistent_undo files.
    let target_path = expand('~/.config/vim-persisted-undo/')

    " create the directory and any parent directories
    " if the location does not exist.
    if !isdirectory(target_path)
        call system('mkdir -p ' . target_path)
    endif

    " point Vim to the defined undo directory.
    let &undodir = target_path

    " finally, enable undo persistence.
    set undofile
endif

"Vim Airline
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#left_alt_sep = '|'
let g:airline#extensions#tabline#formatter = 'unique_tail'
let g:airline_powerline_fonts = 1
let g:airline_theme='minimalist'

"Sign Collumn on the left
set signcolumn=yes

"Demonstrate line numbers on the left
set number

"File type detection
filetype on

"Add fzf to vim
set rtp+=/usr/local/share/fzf

"Theme
syntax on
colorscheme onedark

" Undotree window layout
if !exists('g:undotree_WindowLayout')
    let g:undotree_WindowLayout = 2
endif

" let undotree window get focus after being opened
if !exists('g:undotree_SetFocusWhenToggle')
    let g:undotree_SetFocusWhenToggle = 1
endif

" returns all modified files of the current git repo
" `2>/dev/null` makes the command fail quietly, so that when we are not
" in a git repo, the list will be empty
function! s:gitModified()
    let files = systemlist('git ls-files -m 2>/dev/null')
    return map(files, "{'line': v:val, 'path': v:val}")
endfunction

" same as above, but show untracked files, honouring .gitignore
function! s:gitUntracked()
    let files = systemlist('git ls-files -o --exclude-standard 2>/dev/null')
    return map(files, "{'line': v:val, 'path': v:val}")
endfunction

let g:startify_lists = [
        \ { 'type': 'files',     'header': ['   MRU']            },
        \ { 'type': 'dir',       'header': ['   MRU '. getcwd()] },
        \ { 'type': 'sessions',  'header': ['   Sessions']       },
        \ { 'type': 'bookmarks', 'header': ['   Bookmarks']      },
        \ { 'type': function('s:gitModified'),  'header': ['   git modified']},
        \ { 'type': function('s:gitUntracked'), 'header': ['   git untracked']},
        \ { 'type': 'commands',  'header': ['   Commands']       },
        \ ]

"Vim-startify commands
let g:startify_commands = [
        \ ['Show netrw', ':Lex'],
	\ ['Open Fuzzy Finder', ':FZF'],
        \ ]

"Vim-startify bookmarks
let g:startify_bookmarks = [ {'c': '~/.vimrc'},]

"Save/Load sessions
let g:startify_session_dir = '~/.vim/sessions'

"Auto save session when :SClose
let g:startify_session_persistence = 0

"netrw list style
let g:netrw_liststyle = 3

"netrw - open files in new vertical split window
let g:netrw_browse_split = 4

"netrw - hide files
let g:netrw_list_hide = '\(^\|\s\s\)\zs\.\S\+'

"Open files in Chrome
nnoremap <F12>c :exe ' !open -a /Applications/Google\ Chrome.app %'<CR>

"Auto save files
let g:auto_save = 1  " enable AutoSave on Vim startup
let g:auto_save_silent = 1 "No display autosave notifications

"disable top banner
let g:netrw_banner=0

"Open splits to the right
let g:netrw_altv=1

"Disable bad habits
noremap <Up> <NOP>
noremap <Down> <NOP>
noremap <Left> <NOP>
noremap <Right> <NOP>

inoremap <Up> <NOP>
inoremap <Down> <NOP>
inoremap <Left> <NOP>
inoremap <Right> <NOP>

nnoremap j <NOP>
nnoremap k <NOP>
nnoremap - <NOP>
nnoremap + <NOP>

vnoremap j <NOP>
vnoremap k <NOP>

vnoremap - <NOP>
vnoremap + <NOP>

"Enable vim fuzzy search
set nocompatible      "Limit search to your project
set path+=**          "Search all subdirectories and recursively
set wildmenu          "Shows multiple matches on one line

"Open quickfix window automatically when grep
autocmd QuickFixCmdPost *grep* cwindow

"Show commands are typed
set showcmd

"
let g:gutentags_add_default_project_roots = 0
let g:gutentags_project_root = ['package.json', '.git']

"One true tags directory
let g:gutentags_cache_dir = expand('~/.cache/vim/ctags/')

"auto generate tags file
let g:gutentags_generate_on_new = 1
let g:gutentags_generate_on_missing = 1
let g:gutentags_generate_on_write = 1
let g:gutentags_generate_on_empty_buffer = 0

"Include more info for tags
let g:gutentags_ctags_extra_args = [
      \ '--tag-relative=yes',
      \ '--fields=+ailmnS',
      \ ]

"Mapping <Leader>] for html to css tags jumping
nnoremap <leader>] :tag /<c-r>=expand('<cword>')<cr><cr>

"Mute error sound
set belloff=all

"Decrease delay
set ttimeout
set timeoutlen=1000
set ttimeoutlen=50

"Move the cursor to the matched string, while typing the search pattern
set incsearch

"Highlight all search matches
set hlsearch

"Access system clipboard
set clipboard=unnamed

"Paste texts from other windows to terminal VIM correctly
set pastetoggle=<F2>

"GitGutter fold all unchanged lines
set foldtext=gitgutter#fold#foldtext()

" Show added, modified, and removed lines in current buffer in status line
function! GitStatus()
  let [a,m,r] = GitGutterGetHunkSummary()
  return printf('+%d ~%d -%d', a, m, r)
endfunction
set statusline+=%{GitStatus()}


