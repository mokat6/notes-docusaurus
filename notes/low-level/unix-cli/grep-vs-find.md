There is no universal argument order for all CLI commands.
Each command defines its own grammar.

```
grep [OPTIONS] PATTERN [FILES...]
```

Works  
grep -ri usemediaquery --exclude-dir=node_modules .  
Because GNU grep allows options even after the pattern, as long as they are unambiguous.  
GNU tools are very forgiving.

some older systems wont work. Safe example  
`grep -ri --exclude-dir=node_modules usemediaquery .`

`grep -ri -- "-test" .`  
-- means stop parsing [OPTIONS]

```
-r Recursive
-R Recursive + follow symlinks
-n Show line numbers
-i Case insensitive
-l Show filenames only
```

find [WHERE_TO_SEARCH] [CONDITIONS] [ACTIONS?]

`find . -name "\*.log" -delete`

`find . -name "\*.ts" -exec grep "useMediaQuery" {} \;`  
\{} → placeholder for current file  
\\; → ends the command

---

Pattern 1: Most tools follow  
command [OPTIONS] [OPERANDS]  
e.g. grep, ls, cp, mv, rm

--

Pattern 2: Subcommand Style  
command SUBCOMMAND [OPTIONS] [ARGS]  
e.g. Git, Docker, npm

git commit -m "msg"  
`docker build -t app .`  
npm install express

--

Pattern 3:  
Expression-Based  
`find . -type f -name "\*.js"`  
`awk '{print $1}' file.txt`  
e.g. find, awk

---

in find: `-type f -name "\*.ts"` (CONDITIONS)  
looks exactly like  
in grep: --exclude-dir=node_modules (OPTIONS)

Just because something starts with -  
does NOT mean it is an “option”.  
The dash is just a convention.  
What matters is:  
How the program chooses to interpret it.

grep -ri --exclude-dir=node_modules "test" .  
Everything starting with - modifies how grep behaves.  
-r → recurse  
-i → case insensitive  
--exclude-dir → ignore some directories  
These do not describe what to search.  
They describe HOW to search.

`find . -type f -name "_.ts"`  
Here:  
-type f  
-name "\_.ts"  
These do NOT configure find.  
They describe the filter logic.  
They are part of the search expression.  
Huge difference.

grep CONFIGURATION PATTERN FILES  
find PATH FILTER_EXPRESSION

The -type and -name are not configuring find.  
They are building a logical test.

---

Original Unix (1970s)  
short options, single letter  
ls -l  
rm -r  
grep -i

If an option needed a value  
-option value  
`find . -name "\*.ts"  `
-name = option/predicate

tar -f archive.tar

GNU Arrives (1980s–1990s)  
--long-option  
Two dashes = long option.  
e.g.  
grep --ignore-case  
grep -i

then they added support for = (equal sign)  
grep --exclude-dir=node_modules

This was syntactic sugar for:  
grep --exclude-dir node_modules

The equals sign is optional in most GNU tools.

You can still write:  
grep --exclude-dir node_modules  
The = is optional.  
The equals sign is just convenience.

-a → old Unix short option  
--all → GNU long option  
--option=value → GNU convenience syntax  
find -name → expression token, not configuration flag

find has  
Expression Predicates (find)  
find . -name "\*.ts"  
-name does NOT configure find.  
It is part of the search expression.  
It evaluates to:  
TRUE or FALSE for each file

find has three kinds of things after the path:  
Tests (predicates)  
-name, -type, -size  
Actions  
-print, -delete, -exec  
Operators  
-o (OR), ! (NOT), parentheses

find . -type f -name "_.ts"  
parsed as  
(type == file) AND (name matches "_.ts")

Modern replacements for find already exist.  
fd --type f --extension ts

---

short flags -a -l

"long" flags in old times  
-name "\*.ts"  
-type f

Single dash + word.  
These were basically predicates or expressions (like find) — not configuration flags in the modern sense.  
⚠️ This style is mostly legacy. Modern CLI design avoids it.

Modern CLI Conventions  
Short -d ls -l  
Long --directory ls --directory

Single letter → single dash (-a)  
Full word → double dash (--all)  
Never a single dash with a full word in modern commands (-all is discouraged / invalid)

One dash + full word (-type, -name) is basically a historical artifact, like in find.

Option / flag → changes behavior of the program  
Predicate / test / filter → describes WHAT to operate on, not HOW

Modern commands, for predicates  
uses double-dash style flags for predicated  
`fd --extension ts --type f`

could also be this ...  
mini-language (predicate expressions)

# jq (JSON predicate tool)

jq '.items[] | select(.active == true)'

---

Legacy:  
Single dash + word: -name, -type → could be predicate or configuration flag.  
No easy way to tell without reading the man page.

So in legacy Unix tools, dash style ≠ semantic meaning. You just have to know the command.

Modern:  
Usually short flags are only configuration flags, rarely predicates.  
predicates usually have arguments like --name=jack

in modern tools there's no way to know by looking at it whether it's a predicate or configuration flag. You just have to know  
Because both use --sth

configuration flags can have arguments  
grep --color=auto "foo" file.txt

---

```
git commit -m "some message"
```

| Part           | Type                              | Explanation                                                           |
| -------------- | --------------------------------- | --------------------------------------------------------------------- |
| git            | Command                           | The program you’re running (CLI tool).                                |
| commit         | Subcommand                        | Tells git what action to perform.                                     |
| -m             | Short flag / configuration option | Configures the behavior of git commit.                                |
| "some message" | Argument to the flag              | The value for -m. Specifies the content, not what files are selected. |
