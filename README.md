
# Todo Application UI Template

This template is based upon the crash course I created for FaunaDB. It's fully responsive and can be used on a variety of devices, it shows how the basics of FaunaDB including:

- Creating items
- Deleting items
- Updating items
- Using Indexes for querying


## Tech Stack

**Client:** NextJS, Chakra-ui, SWR
**Database:** FaunaDB
  
## Run Locally

Clone the project

```bash
  git clone https://github.com/perkinsjr/todo-app-ui
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn
```

Copy and add your key

```
cp .env.local.example .env.local
// open your .env.local and replace '' with the key from Fauna.

```

Start the server

```bash
  yarn run dev
```
