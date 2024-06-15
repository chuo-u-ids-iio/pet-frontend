import 'zx/globals'
const ref = process.env.REF ?? 'main'

const SWAGGER_PATH =
  'https://raw.githubusercontent.com/chuo-ids-iio/pet-backend/main/docs/openapi.json'
const GENERATED = 'src/api/generated/types.ts'

await $`npx openapi-typescript ${SWAGGER_PATH} --output ${GENERATED}`
