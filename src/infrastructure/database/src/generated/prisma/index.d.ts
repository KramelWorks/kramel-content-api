
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ProjectModel
 * 
 */
export type ProjectModel = $Result.DefaultSelection<Prisma.$ProjectModelPayload>
/**
 * Model BlockModel
 * 
 */
export type BlockModel = $Result.DefaultSelection<Prisma.$BlockModelPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ProjectModels
 * const projectModels = await prisma.projectModel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ProjectModels
   * const projectModels = await prisma.projectModel.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.projectModel`: Exposes CRUD operations for the **ProjectModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectModels
    * const projectModels = await prisma.projectModel.findMany()
    * ```
    */
  get projectModel(): Prisma.ProjectModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockModel`: Exposes CRUD operations for the **BlockModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockModels
    * const blockModels = await prisma.blockModel.findMany()
    * ```
    */
  get blockModel(): Prisma.BlockModelDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ProjectModel: 'ProjectModel',
    BlockModel: 'BlockModel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "projectModel" | "blockModel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ProjectModel: {
        payload: Prisma.$ProjectModelPayload<ExtArgs>
        fields: Prisma.ProjectModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectModelPayload>
          }
          findFirst: {
            args: Prisma.ProjectModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectModelPayload>
          }
          findMany: {
            args: Prisma.ProjectModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectModelPayload>[]
          }
          create: {
            args: Prisma.ProjectModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectModelPayload>
          }
          createMany: {
            args: Prisma.ProjectModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectModelPayload>[]
          }
          delete: {
            args: Prisma.ProjectModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectModelPayload>
          }
          update: {
            args: Prisma.ProjectModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectModelPayload>
          }
          deleteMany: {
            args: Prisma.ProjectModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectModelPayload>[]
          }
          upsert: {
            args: Prisma.ProjectModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectModelPayload>
          }
          aggregate: {
            args: Prisma.ProjectModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectModel>
          }
          groupBy: {
            args: Prisma.ProjectModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectModelCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectModelCountAggregateOutputType> | number
          }
        }
      }
      BlockModel: {
        payload: Prisma.$BlockModelPayload<ExtArgs>
        fields: Prisma.BlockModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockModelPayload>
          }
          findFirst: {
            args: Prisma.BlockModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockModelPayload>
          }
          findMany: {
            args: Prisma.BlockModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockModelPayload>[]
          }
          create: {
            args: Prisma.BlockModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockModelPayload>
          }
          createMany: {
            args: Prisma.BlockModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockModelPayload>[]
          }
          delete: {
            args: Prisma.BlockModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockModelPayload>
          }
          update: {
            args: Prisma.BlockModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockModelPayload>
          }
          deleteMany: {
            args: Prisma.BlockModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockModelPayload>[]
          }
          upsert: {
            args: Prisma.BlockModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockModelPayload>
          }
          aggregate: {
            args: Prisma.BlockModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockModel>
          }
          groupBy: {
            args: Prisma.BlockModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockModelCountArgs<ExtArgs>
            result: $Utils.Optional<BlockModelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    projectModel?: ProjectModelOmit
    blockModel?: BlockModelOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectModelCountOutputType
   */

  export type ProjectModelCountOutputType = {
    blocks: number
  }

  export type ProjectModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | ProjectModelCountOutputTypeCountBlocksArgs
  }

  // Custom InputTypes
  /**
   * ProjectModelCountOutputType without action
   */
  export type ProjectModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModelCountOutputType
     */
    select?: ProjectModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectModelCountOutputType without action
   */
  export type ProjectModelCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockModelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ProjectModel
   */

  export type AggregateProjectModel = {
    _count: ProjectModelCountAggregateOutputType | null
    _avg: ProjectModelAvgAggregateOutputType | null
    _sum: ProjectModelSumAggregateOutputType | null
    _min: ProjectModelMinAggregateOutputType | null
    _max: ProjectModelMaxAggregateOutputType | null
  }

  export type ProjectModelAvgAggregateOutputType = {
    version: number | null
  }

  export type ProjectModelSumAggregateOutputType = {
    version: number | null
  }

  export type ProjectModelMinAggregateOutputType = {
    title: string | null
    description: string | null
    state: string | null
    slug: string | null
    version: number | null
    tags: string | null
    id: string | null
    createAt: Date | null
    updateAt: Date | null
    deletedAt: Date | null
    tenantId: string | null
    isActive: boolean | null
    isDeleted: boolean | null
  }

  export type ProjectModelMaxAggregateOutputType = {
    title: string | null
    description: string | null
    state: string | null
    slug: string | null
    version: number | null
    tags: string | null
    id: string | null
    createAt: Date | null
    updateAt: Date | null
    deletedAt: Date | null
    tenantId: string | null
    isActive: boolean | null
    isDeleted: boolean | null
  }

  export type ProjectModelCountAggregateOutputType = {
    title: number
    description: number
    state: number
    slug: number
    version: number
    tags: number
    id: number
    createAt: number
    updateAt: number
    deletedAt: number
    tenantId: number
    isActive: number
    isDeleted: number
    _all: number
  }


  export type ProjectModelAvgAggregateInputType = {
    version?: true
  }

  export type ProjectModelSumAggregateInputType = {
    version?: true
  }

  export type ProjectModelMinAggregateInputType = {
    title?: true
    description?: true
    state?: true
    slug?: true
    version?: true
    tags?: true
    id?: true
    createAt?: true
    updateAt?: true
    deletedAt?: true
    tenantId?: true
    isActive?: true
    isDeleted?: true
  }

  export type ProjectModelMaxAggregateInputType = {
    title?: true
    description?: true
    state?: true
    slug?: true
    version?: true
    tags?: true
    id?: true
    createAt?: true
    updateAt?: true
    deletedAt?: true
    tenantId?: true
    isActive?: true
    isDeleted?: true
  }

  export type ProjectModelCountAggregateInputType = {
    title?: true
    description?: true
    state?: true
    slug?: true
    version?: true
    tags?: true
    id?: true
    createAt?: true
    updateAt?: true
    deletedAt?: true
    tenantId?: true
    isActive?: true
    isDeleted?: true
    _all?: true
  }

  export type ProjectModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectModel to aggregate.
     */
    where?: ProjectModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectModels to fetch.
     */
    orderBy?: ProjectModelOrderByWithRelationInput | ProjectModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectModels
    **/
    _count?: true | ProjectModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectModelMaxAggregateInputType
  }

  export type GetProjectModelAggregateType<T extends ProjectModelAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectModel[P]>
      : GetScalarType<T[P], AggregateProjectModel[P]>
  }




  export type ProjectModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectModelWhereInput
    orderBy?: ProjectModelOrderByWithAggregationInput | ProjectModelOrderByWithAggregationInput[]
    by: ProjectModelScalarFieldEnum[] | ProjectModelScalarFieldEnum
    having?: ProjectModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectModelCountAggregateInputType | true
    _avg?: ProjectModelAvgAggregateInputType
    _sum?: ProjectModelSumAggregateInputType
    _min?: ProjectModelMinAggregateInputType
    _max?: ProjectModelMaxAggregateInputType
  }

  export type ProjectModelGroupByOutputType = {
    title: string
    description: string
    state: string
    slug: string
    version: number
    tags: string
    id: string
    createAt: Date
    updateAt: Date
    deletedAt: Date
    tenantId: string
    isActive: boolean
    isDeleted: boolean
    _count: ProjectModelCountAggregateOutputType | null
    _avg: ProjectModelAvgAggregateOutputType | null
    _sum: ProjectModelSumAggregateOutputType | null
    _min: ProjectModelMinAggregateOutputType | null
    _max: ProjectModelMaxAggregateOutputType | null
  }

  type GetProjectModelGroupByPayload<T extends ProjectModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectModelGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectModelGroupByOutputType[P]>
        }
      >
    >


  export type ProjectModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    title?: boolean
    description?: boolean
    state?: boolean
    slug?: boolean
    version?: boolean
    tags?: boolean
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    deletedAt?: boolean
    tenantId?: boolean
    isActive?: boolean
    isDeleted?: boolean
    blocks?: boolean | ProjectModel$blocksArgs<ExtArgs>
    _count?: boolean | ProjectModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectModel"]>

  export type ProjectModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    title?: boolean
    description?: boolean
    state?: boolean
    slug?: boolean
    version?: boolean
    tags?: boolean
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    deletedAt?: boolean
    tenantId?: boolean
    isActive?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["projectModel"]>

  export type ProjectModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    title?: boolean
    description?: boolean
    state?: boolean
    slug?: boolean
    version?: boolean
    tags?: boolean
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    deletedAt?: boolean
    tenantId?: boolean
    isActive?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["projectModel"]>

  export type ProjectModelSelectScalar = {
    title?: boolean
    description?: boolean
    state?: boolean
    slug?: boolean
    version?: boolean
    tags?: boolean
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    deletedAt?: boolean
    tenantId?: boolean
    isActive?: boolean
    isDeleted?: boolean
  }

  export type ProjectModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"title" | "description" | "state" | "slug" | "version" | "tags" | "id" | "createAt" | "updateAt" | "deletedAt" | "tenantId" | "isActive" | "isDeleted", ExtArgs["result"]["projectModel"]>
  export type ProjectModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | ProjectModel$blocksArgs<ExtArgs>
    _count?: boolean | ProjectModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectModel"
    objects: {
      blocks: Prisma.$BlockModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      title: string
      description: string
      state: string
      slug: string
      version: number
      tags: string
      id: string
      createAt: Date
      updateAt: Date
      deletedAt: Date
      tenantId: string
      isActive: boolean
      isDeleted: boolean
    }, ExtArgs["result"]["projectModel"]>
    composites: {}
  }

  type ProjectModelGetPayload<S extends boolean | null | undefined | ProjectModelDefaultArgs> = $Result.GetResult<Prisma.$ProjectModelPayload, S>

  type ProjectModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectModelCountAggregateInputType | true
    }

  export interface ProjectModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectModel'], meta: { name: 'ProjectModel' } }
    /**
     * Find zero or one ProjectModel that matches the filter.
     * @param {ProjectModelFindUniqueArgs} args - Arguments to find a ProjectModel
     * @example
     * // Get one ProjectModel
     * const projectModel = await prisma.projectModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectModelFindUniqueArgs>(args: SelectSubset<T, ProjectModelFindUniqueArgs<ExtArgs>>): Prisma__ProjectModelClient<$Result.GetResult<Prisma.$ProjectModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectModelFindUniqueOrThrowArgs} args - Arguments to find a ProjectModel
     * @example
     * // Get one ProjectModel
     * const projectModel = await prisma.projectModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectModelClient<$Result.GetResult<Prisma.$ProjectModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectModelFindFirstArgs} args - Arguments to find a ProjectModel
     * @example
     * // Get one ProjectModel
     * const projectModel = await prisma.projectModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectModelFindFirstArgs>(args?: SelectSubset<T, ProjectModelFindFirstArgs<ExtArgs>>): Prisma__ProjectModelClient<$Result.GetResult<Prisma.$ProjectModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectModelFindFirstOrThrowArgs} args - Arguments to find a ProjectModel
     * @example
     * // Get one ProjectModel
     * const projectModel = await prisma.projectModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectModelClient<$Result.GetResult<Prisma.$ProjectModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectModels
     * const projectModels = await prisma.projectModel.findMany()
     * 
     * // Get first 10 ProjectModels
     * const projectModels = await prisma.projectModel.findMany({ take: 10 })
     * 
     * // Only select the `title`
     * const projectModelWithTitleOnly = await prisma.projectModel.findMany({ select: { title: true } })
     * 
     */
    findMany<T extends ProjectModelFindManyArgs>(args?: SelectSubset<T, ProjectModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectModel.
     * @param {ProjectModelCreateArgs} args - Arguments to create a ProjectModel.
     * @example
     * // Create one ProjectModel
     * const ProjectModel = await prisma.projectModel.create({
     *   data: {
     *     // ... data to create a ProjectModel
     *   }
     * })
     * 
     */
    create<T extends ProjectModelCreateArgs>(args: SelectSubset<T, ProjectModelCreateArgs<ExtArgs>>): Prisma__ProjectModelClient<$Result.GetResult<Prisma.$ProjectModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectModels.
     * @param {ProjectModelCreateManyArgs} args - Arguments to create many ProjectModels.
     * @example
     * // Create many ProjectModels
     * const projectModel = await prisma.projectModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectModelCreateManyArgs>(args?: SelectSubset<T, ProjectModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectModels and returns the data saved in the database.
     * @param {ProjectModelCreateManyAndReturnArgs} args - Arguments to create many ProjectModels.
     * @example
     * // Create many ProjectModels
     * const projectModel = await prisma.projectModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectModels and only return the `title`
     * const projectModelWithTitleOnly = await prisma.projectModel.createManyAndReturn({
     *   select: { title: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectModelCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectModel.
     * @param {ProjectModelDeleteArgs} args - Arguments to delete one ProjectModel.
     * @example
     * // Delete one ProjectModel
     * const ProjectModel = await prisma.projectModel.delete({
     *   where: {
     *     // ... filter to delete one ProjectModel
     *   }
     * })
     * 
     */
    delete<T extends ProjectModelDeleteArgs>(args: SelectSubset<T, ProjectModelDeleteArgs<ExtArgs>>): Prisma__ProjectModelClient<$Result.GetResult<Prisma.$ProjectModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectModel.
     * @param {ProjectModelUpdateArgs} args - Arguments to update one ProjectModel.
     * @example
     * // Update one ProjectModel
     * const projectModel = await prisma.projectModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectModelUpdateArgs>(args: SelectSubset<T, ProjectModelUpdateArgs<ExtArgs>>): Prisma__ProjectModelClient<$Result.GetResult<Prisma.$ProjectModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectModels.
     * @param {ProjectModelDeleteManyArgs} args - Arguments to filter ProjectModels to delete.
     * @example
     * // Delete a few ProjectModels
     * const { count } = await prisma.projectModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectModelDeleteManyArgs>(args?: SelectSubset<T, ProjectModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectModels
     * const projectModel = await prisma.projectModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectModelUpdateManyArgs>(args: SelectSubset<T, ProjectModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectModels and returns the data updated in the database.
     * @param {ProjectModelUpdateManyAndReturnArgs} args - Arguments to update many ProjectModels.
     * @example
     * // Update many ProjectModels
     * const projectModel = await prisma.projectModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectModels and only return the `title`
     * const projectModelWithTitleOnly = await prisma.projectModel.updateManyAndReturn({
     *   select: { title: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectModelUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectModel.
     * @param {ProjectModelUpsertArgs} args - Arguments to update or create a ProjectModel.
     * @example
     * // Update or create a ProjectModel
     * const projectModel = await prisma.projectModel.upsert({
     *   create: {
     *     // ... data to create a ProjectModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectModel we want to update
     *   }
     * })
     */
    upsert<T extends ProjectModelUpsertArgs>(args: SelectSubset<T, ProjectModelUpsertArgs<ExtArgs>>): Prisma__ProjectModelClient<$Result.GetResult<Prisma.$ProjectModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectModelCountArgs} args - Arguments to filter ProjectModels to count.
     * @example
     * // Count the number of ProjectModels
     * const count = await prisma.projectModel.count({
     *   where: {
     *     // ... the filter for the ProjectModels we want to count
     *   }
     * })
    **/
    count<T extends ProjectModelCountArgs>(
      args?: Subset<T, ProjectModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectModelAggregateArgs>(args: Subset<T, ProjectModelAggregateArgs>): Prisma.PrismaPromise<GetProjectModelAggregateType<T>>

    /**
     * Group by ProjectModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectModelGroupByArgs['orderBy'] }
        : { orderBy?: ProjectModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectModel model
   */
  readonly fields: ProjectModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blocks<T extends ProjectModel$blocksArgs<ExtArgs> = {}>(args?: Subset<T, ProjectModel$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectModel model
   */
  interface ProjectModelFieldRefs {
    readonly title: FieldRef<"ProjectModel", 'String'>
    readonly description: FieldRef<"ProjectModel", 'String'>
    readonly state: FieldRef<"ProjectModel", 'String'>
    readonly slug: FieldRef<"ProjectModel", 'String'>
    readonly version: FieldRef<"ProjectModel", 'Int'>
    readonly tags: FieldRef<"ProjectModel", 'String'>
    readonly id: FieldRef<"ProjectModel", 'String'>
    readonly createAt: FieldRef<"ProjectModel", 'DateTime'>
    readonly updateAt: FieldRef<"ProjectModel", 'DateTime'>
    readonly deletedAt: FieldRef<"ProjectModel", 'DateTime'>
    readonly tenantId: FieldRef<"ProjectModel", 'String'>
    readonly isActive: FieldRef<"ProjectModel", 'Boolean'>
    readonly isDeleted: FieldRef<"ProjectModel", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProjectModel findUnique
   */
  export type ProjectModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModel
     */
    select?: ProjectModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectModel
     */
    omit?: ProjectModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectModelInclude<ExtArgs> | null
    /**
     * Filter, which ProjectModel to fetch.
     */
    where: ProjectModelWhereUniqueInput
  }

  /**
   * ProjectModel findUniqueOrThrow
   */
  export type ProjectModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModel
     */
    select?: ProjectModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectModel
     */
    omit?: ProjectModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectModelInclude<ExtArgs> | null
    /**
     * Filter, which ProjectModel to fetch.
     */
    where: ProjectModelWhereUniqueInput
  }

  /**
   * ProjectModel findFirst
   */
  export type ProjectModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModel
     */
    select?: ProjectModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectModel
     */
    omit?: ProjectModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectModelInclude<ExtArgs> | null
    /**
     * Filter, which ProjectModel to fetch.
     */
    where?: ProjectModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectModels to fetch.
     */
    orderBy?: ProjectModelOrderByWithRelationInput | ProjectModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectModels.
     */
    cursor?: ProjectModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectModels.
     */
    distinct?: ProjectModelScalarFieldEnum | ProjectModelScalarFieldEnum[]
  }

  /**
   * ProjectModel findFirstOrThrow
   */
  export type ProjectModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModel
     */
    select?: ProjectModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectModel
     */
    omit?: ProjectModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectModelInclude<ExtArgs> | null
    /**
     * Filter, which ProjectModel to fetch.
     */
    where?: ProjectModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectModels to fetch.
     */
    orderBy?: ProjectModelOrderByWithRelationInput | ProjectModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectModels.
     */
    cursor?: ProjectModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectModels.
     */
    distinct?: ProjectModelScalarFieldEnum | ProjectModelScalarFieldEnum[]
  }

  /**
   * ProjectModel findMany
   */
  export type ProjectModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModel
     */
    select?: ProjectModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectModel
     */
    omit?: ProjectModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectModelInclude<ExtArgs> | null
    /**
     * Filter, which ProjectModels to fetch.
     */
    where?: ProjectModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectModels to fetch.
     */
    orderBy?: ProjectModelOrderByWithRelationInput | ProjectModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectModels.
     */
    cursor?: ProjectModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectModels.
     */
    skip?: number
    distinct?: ProjectModelScalarFieldEnum | ProjectModelScalarFieldEnum[]
  }

  /**
   * ProjectModel create
   */
  export type ProjectModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModel
     */
    select?: ProjectModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectModel
     */
    omit?: ProjectModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectModelInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectModel.
     */
    data: XOR<ProjectModelCreateInput, ProjectModelUncheckedCreateInput>
  }

  /**
   * ProjectModel createMany
   */
  export type ProjectModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectModels.
     */
    data: ProjectModelCreateManyInput | ProjectModelCreateManyInput[]
  }

  /**
   * ProjectModel createManyAndReturn
   */
  export type ProjectModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModel
     */
    select?: ProjectModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectModel
     */
    omit?: ProjectModelOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectModels.
     */
    data: ProjectModelCreateManyInput | ProjectModelCreateManyInput[]
  }

  /**
   * ProjectModel update
   */
  export type ProjectModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModel
     */
    select?: ProjectModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectModel
     */
    omit?: ProjectModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectModelInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectModel.
     */
    data: XOR<ProjectModelUpdateInput, ProjectModelUncheckedUpdateInput>
    /**
     * Choose, which ProjectModel to update.
     */
    where: ProjectModelWhereUniqueInput
  }

  /**
   * ProjectModel updateMany
   */
  export type ProjectModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectModels.
     */
    data: XOR<ProjectModelUpdateManyMutationInput, ProjectModelUncheckedUpdateManyInput>
    /**
     * Filter which ProjectModels to update
     */
    where?: ProjectModelWhereInput
    /**
     * Limit how many ProjectModels to update.
     */
    limit?: number
  }

  /**
   * ProjectModel updateManyAndReturn
   */
  export type ProjectModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModel
     */
    select?: ProjectModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectModel
     */
    omit?: ProjectModelOmit<ExtArgs> | null
    /**
     * The data used to update ProjectModels.
     */
    data: XOR<ProjectModelUpdateManyMutationInput, ProjectModelUncheckedUpdateManyInput>
    /**
     * Filter which ProjectModels to update
     */
    where?: ProjectModelWhereInput
    /**
     * Limit how many ProjectModels to update.
     */
    limit?: number
  }

  /**
   * ProjectModel upsert
   */
  export type ProjectModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModel
     */
    select?: ProjectModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectModel
     */
    omit?: ProjectModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectModelInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectModel to update in case it exists.
     */
    where: ProjectModelWhereUniqueInput
    /**
     * In case the ProjectModel found by the `where` argument doesn't exist, create a new ProjectModel with this data.
     */
    create: XOR<ProjectModelCreateInput, ProjectModelUncheckedCreateInput>
    /**
     * In case the ProjectModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectModelUpdateInput, ProjectModelUncheckedUpdateInput>
  }

  /**
   * ProjectModel delete
   */
  export type ProjectModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModel
     */
    select?: ProjectModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectModel
     */
    omit?: ProjectModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectModelInclude<ExtArgs> | null
    /**
     * Filter which ProjectModel to delete.
     */
    where: ProjectModelWhereUniqueInput
  }

  /**
   * ProjectModel deleteMany
   */
  export type ProjectModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectModels to delete
     */
    where?: ProjectModelWhereInput
    /**
     * Limit how many ProjectModels to delete.
     */
    limit?: number
  }

  /**
   * ProjectModel.blocks
   */
  export type ProjectModel$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelInclude<ExtArgs> | null
    where?: BlockModelWhereInput
    orderBy?: BlockModelOrderByWithRelationInput | BlockModelOrderByWithRelationInput[]
    cursor?: BlockModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockModelScalarFieldEnum | BlockModelScalarFieldEnum[]
  }

  /**
   * ProjectModel without action
   */
  export type ProjectModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectModel
     */
    select?: ProjectModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectModel
     */
    omit?: ProjectModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectModelInclude<ExtArgs> | null
  }


  /**
   * Model BlockModel
   */

  export type AggregateBlockModel = {
    _count: BlockModelCountAggregateOutputType | null
    _avg: BlockModelAvgAggregateOutputType | null
    _sum: BlockModelSumAggregateOutputType | null
    _min: BlockModelMinAggregateOutputType | null
    _max: BlockModelMaxAggregateOutputType | null
  }

  export type BlockModelAvgAggregateOutputType = {
    version: number | null
    order: number | null
  }

  export type BlockModelSumAggregateOutputType = {
    version: number | null
    order: number | null
  }

  export type BlockModelMinAggregateOutputType = {
    version: number | null
    order: number | null
    slug: string | null
    title: string | null
    description: string | null
    id: string | null
    createAt: Date | null
    updateAt: Date | null
    deletedAt: Date | null
    tenantId: string | null
    isActive: boolean | null
    isDeleted: boolean | null
    projectId: string | null
  }

  export type BlockModelMaxAggregateOutputType = {
    version: number | null
    order: number | null
    slug: string | null
    title: string | null
    description: string | null
    id: string | null
    createAt: Date | null
    updateAt: Date | null
    deletedAt: Date | null
    tenantId: string | null
    isActive: boolean | null
    isDeleted: boolean | null
    projectId: string | null
  }

  export type BlockModelCountAggregateOutputType = {
    version: number
    order: number
    slug: number
    title: number
    description: number
    id: number
    createAt: number
    updateAt: number
    deletedAt: number
    tenantId: number
    isActive: number
    isDeleted: number
    projectId: number
    _all: number
  }


  export type BlockModelAvgAggregateInputType = {
    version?: true
    order?: true
  }

  export type BlockModelSumAggregateInputType = {
    version?: true
    order?: true
  }

  export type BlockModelMinAggregateInputType = {
    version?: true
    order?: true
    slug?: true
    title?: true
    description?: true
    id?: true
    createAt?: true
    updateAt?: true
    deletedAt?: true
    tenantId?: true
    isActive?: true
    isDeleted?: true
    projectId?: true
  }

  export type BlockModelMaxAggregateInputType = {
    version?: true
    order?: true
    slug?: true
    title?: true
    description?: true
    id?: true
    createAt?: true
    updateAt?: true
    deletedAt?: true
    tenantId?: true
    isActive?: true
    isDeleted?: true
    projectId?: true
  }

  export type BlockModelCountAggregateInputType = {
    version?: true
    order?: true
    slug?: true
    title?: true
    description?: true
    id?: true
    createAt?: true
    updateAt?: true
    deletedAt?: true
    tenantId?: true
    isActive?: true
    isDeleted?: true
    projectId?: true
    _all?: true
  }

  export type BlockModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockModel to aggregate.
     */
    where?: BlockModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockModels to fetch.
     */
    orderBy?: BlockModelOrderByWithRelationInput | BlockModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockModels
    **/
    _count?: true | BlockModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockModelMaxAggregateInputType
  }

  export type GetBlockModelAggregateType<T extends BlockModelAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockModel[P]>
      : GetScalarType<T[P], AggregateBlockModel[P]>
  }




  export type BlockModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockModelWhereInput
    orderBy?: BlockModelOrderByWithAggregationInput | BlockModelOrderByWithAggregationInput[]
    by: BlockModelScalarFieldEnum[] | BlockModelScalarFieldEnum
    having?: BlockModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockModelCountAggregateInputType | true
    _avg?: BlockModelAvgAggregateInputType
    _sum?: BlockModelSumAggregateInputType
    _min?: BlockModelMinAggregateInputType
    _max?: BlockModelMaxAggregateInputType
  }

  export type BlockModelGroupByOutputType = {
    version: number
    order: number
    slug: string
    title: string
    description: string
    id: string
    createAt: Date
    updateAt: Date
    deletedAt: Date
    tenantId: string
    isActive: boolean
    isDeleted: boolean
    projectId: string
    _count: BlockModelCountAggregateOutputType | null
    _avg: BlockModelAvgAggregateOutputType | null
    _sum: BlockModelSumAggregateOutputType | null
    _min: BlockModelMinAggregateOutputType | null
    _max: BlockModelMaxAggregateOutputType | null
  }

  type GetBlockModelGroupByPayload<T extends BlockModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockModelGroupByOutputType[P]>
            : GetScalarType<T[P], BlockModelGroupByOutputType[P]>
        }
      >
    >


  export type BlockModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    order?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    deletedAt?: boolean
    tenantId?: boolean
    isActive?: boolean
    isDeleted?: boolean
    projectId?: boolean
    project?: boolean | ProjectModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockModel"]>

  export type BlockModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    order?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    deletedAt?: boolean
    tenantId?: boolean
    isActive?: boolean
    isDeleted?: boolean
    projectId?: boolean
    project?: boolean | ProjectModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockModel"]>

  export type BlockModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    order?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    deletedAt?: boolean
    tenantId?: boolean
    isActive?: boolean
    isDeleted?: boolean
    projectId?: boolean
    project?: boolean | ProjectModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockModel"]>

  export type BlockModelSelectScalar = {
    version?: boolean
    order?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    deletedAt?: boolean
    tenantId?: boolean
    isActive?: boolean
    isDeleted?: boolean
    projectId?: boolean
  }

  export type BlockModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"version" | "order" | "slug" | "title" | "description" | "id" | "createAt" | "updateAt" | "deletedAt" | "tenantId" | "isActive" | "isDeleted" | "projectId", ExtArgs["result"]["blockModel"]>
  export type BlockModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectModelDefaultArgs<ExtArgs>
  }
  export type BlockModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectModelDefaultArgs<ExtArgs>
  }
  export type BlockModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectModelDefaultArgs<ExtArgs>
  }

  export type $BlockModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockModel"
    objects: {
      project: Prisma.$ProjectModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      version: number
      order: number
      slug: string
      title: string
      description: string
      id: string
      createAt: Date
      updateAt: Date
      deletedAt: Date
      tenantId: string
      isActive: boolean
      isDeleted: boolean
      projectId: string
    }, ExtArgs["result"]["blockModel"]>
    composites: {}
  }

  type BlockModelGetPayload<S extends boolean | null | undefined | BlockModelDefaultArgs> = $Result.GetResult<Prisma.$BlockModelPayload, S>

  type BlockModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockModelCountAggregateInputType | true
    }

  export interface BlockModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockModel'], meta: { name: 'BlockModel' } }
    /**
     * Find zero or one BlockModel that matches the filter.
     * @param {BlockModelFindUniqueArgs} args - Arguments to find a BlockModel
     * @example
     * // Get one BlockModel
     * const blockModel = await prisma.blockModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockModelFindUniqueArgs>(args: SelectSubset<T, BlockModelFindUniqueArgs<ExtArgs>>): Prisma__BlockModelClient<$Result.GetResult<Prisma.$BlockModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockModelFindUniqueOrThrowArgs} args - Arguments to find a BlockModel
     * @example
     * // Get one BlockModel
     * const blockModel = await prisma.blockModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockModelFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockModelClient<$Result.GetResult<Prisma.$BlockModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockModelFindFirstArgs} args - Arguments to find a BlockModel
     * @example
     * // Get one BlockModel
     * const blockModel = await prisma.blockModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockModelFindFirstArgs>(args?: SelectSubset<T, BlockModelFindFirstArgs<ExtArgs>>): Prisma__BlockModelClient<$Result.GetResult<Prisma.$BlockModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockModelFindFirstOrThrowArgs} args - Arguments to find a BlockModel
     * @example
     * // Get one BlockModel
     * const blockModel = await prisma.blockModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockModelFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockModelClient<$Result.GetResult<Prisma.$BlockModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockModels
     * const blockModels = await prisma.blockModel.findMany()
     * 
     * // Get first 10 BlockModels
     * const blockModels = await prisma.blockModel.findMany({ take: 10 })
     * 
     * // Only select the `version`
     * const blockModelWithVersionOnly = await prisma.blockModel.findMany({ select: { version: true } })
     * 
     */
    findMany<T extends BlockModelFindManyArgs>(args?: SelectSubset<T, BlockModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockModel.
     * @param {BlockModelCreateArgs} args - Arguments to create a BlockModel.
     * @example
     * // Create one BlockModel
     * const BlockModel = await prisma.blockModel.create({
     *   data: {
     *     // ... data to create a BlockModel
     *   }
     * })
     * 
     */
    create<T extends BlockModelCreateArgs>(args: SelectSubset<T, BlockModelCreateArgs<ExtArgs>>): Prisma__BlockModelClient<$Result.GetResult<Prisma.$BlockModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockModels.
     * @param {BlockModelCreateManyArgs} args - Arguments to create many BlockModels.
     * @example
     * // Create many BlockModels
     * const blockModel = await prisma.blockModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockModelCreateManyArgs>(args?: SelectSubset<T, BlockModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockModels and returns the data saved in the database.
     * @param {BlockModelCreateManyAndReturnArgs} args - Arguments to create many BlockModels.
     * @example
     * // Create many BlockModels
     * const blockModel = await prisma.blockModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockModels and only return the `version`
     * const blockModelWithVersionOnly = await prisma.blockModel.createManyAndReturn({
     *   select: { version: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockModelCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockModel.
     * @param {BlockModelDeleteArgs} args - Arguments to delete one BlockModel.
     * @example
     * // Delete one BlockModel
     * const BlockModel = await prisma.blockModel.delete({
     *   where: {
     *     // ... filter to delete one BlockModel
     *   }
     * })
     * 
     */
    delete<T extends BlockModelDeleteArgs>(args: SelectSubset<T, BlockModelDeleteArgs<ExtArgs>>): Prisma__BlockModelClient<$Result.GetResult<Prisma.$BlockModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockModel.
     * @param {BlockModelUpdateArgs} args - Arguments to update one BlockModel.
     * @example
     * // Update one BlockModel
     * const blockModel = await prisma.blockModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockModelUpdateArgs>(args: SelectSubset<T, BlockModelUpdateArgs<ExtArgs>>): Prisma__BlockModelClient<$Result.GetResult<Prisma.$BlockModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockModels.
     * @param {BlockModelDeleteManyArgs} args - Arguments to filter BlockModels to delete.
     * @example
     * // Delete a few BlockModels
     * const { count } = await prisma.blockModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockModelDeleteManyArgs>(args?: SelectSubset<T, BlockModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockModels
     * const blockModel = await prisma.blockModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockModelUpdateManyArgs>(args: SelectSubset<T, BlockModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockModels and returns the data updated in the database.
     * @param {BlockModelUpdateManyAndReturnArgs} args - Arguments to update many BlockModels.
     * @example
     * // Update many BlockModels
     * const blockModel = await prisma.blockModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockModels and only return the `version`
     * const blockModelWithVersionOnly = await prisma.blockModel.updateManyAndReturn({
     *   select: { version: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlockModelUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockModel.
     * @param {BlockModelUpsertArgs} args - Arguments to update or create a BlockModel.
     * @example
     * // Update or create a BlockModel
     * const blockModel = await prisma.blockModel.upsert({
     *   create: {
     *     // ... data to create a BlockModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockModel we want to update
     *   }
     * })
     */
    upsert<T extends BlockModelUpsertArgs>(args: SelectSubset<T, BlockModelUpsertArgs<ExtArgs>>): Prisma__BlockModelClient<$Result.GetResult<Prisma.$BlockModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockModelCountArgs} args - Arguments to filter BlockModels to count.
     * @example
     * // Count the number of BlockModels
     * const count = await prisma.blockModel.count({
     *   where: {
     *     // ... the filter for the BlockModels we want to count
     *   }
     * })
    **/
    count<T extends BlockModelCountArgs>(
      args?: Subset<T, BlockModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockModelAggregateArgs>(args: Subset<T, BlockModelAggregateArgs>): Prisma.PrismaPromise<GetBlockModelAggregateType<T>>

    /**
     * Group by BlockModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockModelGroupByArgs['orderBy'] }
        : { orderBy?: BlockModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockModel model
   */
  readonly fields: BlockModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectModelDefaultArgs<ExtArgs>>): Prisma__ProjectModelClient<$Result.GetResult<Prisma.$ProjectModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlockModel model
   */
  interface BlockModelFieldRefs {
    readonly version: FieldRef<"BlockModel", 'Int'>
    readonly order: FieldRef<"BlockModel", 'Int'>
    readonly slug: FieldRef<"BlockModel", 'String'>
    readonly title: FieldRef<"BlockModel", 'String'>
    readonly description: FieldRef<"BlockModel", 'String'>
    readonly id: FieldRef<"BlockModel", 'String'>
    readonly createAt: FieldRef<"BlockModel", 'DateTime'>
    readonly updateAt: FieldRef<"BlockModel", 'DateTime'>
    readonly deletedAt: FieldRef<"BlockModel", 'DateTime'>
    readonly tenantId: FieldRef<"BlockModel", 'String'>
    readonly isActive: FieldRef<"BlockModel", 'Boolean'>
    readonly isDeleted: FieldRef<"BlockModel", 'Boolean'>
    readonly projectId: FieldRef<"BlockModel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlockModel findUnique
   */
  export type BlockModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelInclude<ExtArgs> | null
    /**
     * Filter, which BlockModel to fetch.
     */
    where: BlockModelWhereUniqueInput
  }

  /**
   * BlockModel findUniqueOrThrow
   */
  export type BlockModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelInclude<ExtArgs> | null
    /**
     * Filter, which BlockModel to fetch.
     */
    where: BlockModelWhereUniqueInput
  }

  /**
   * BlockModel findFirst
   */
  export type BlockModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelInclude<ExtArgs> | null
    /**
     * Filter, which BlockModel to fetch.
     */
    where?: BlockModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockModels to fetch.
     */
    orderBy?: BlockModelOrderByWithRelationInput | BlockModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockModels.
     */
    cursor?: BlockModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockModels.
     */
    distinct?: BlockModelScalarFieldEnum | BlockModelScalarFieldEnum[]
  }

  /**
   * BlockModel findFirstOrThrow
   */
  export type BlockModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelInclude<ExtArgs> | null
    /**
     * Filter, which BlockModel to fetch.
     */
    where?: BlockModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockModels to fetch.
     */
    orderBy?: BlockModelOrderByWithRelationInput | BlockModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockModels.
     */
    cursor?: BlockModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockModels.
     */
    distinct?: BlockModelScalarFieldEnum | BlockModelScalarFieldEnum[]
  }

  /**
   * BlockModel findMany
   */
  export type BlockModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelInclude<ExtArgs> | null
    /**
     * Filter, which BlockModels to fetch.
     */
    where?: BlockModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockModels to fetch.
     */
    orderBy?: BlockModelOrderByWithRelationInput | BlockModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockModels.
     */
    cursor?: BlockModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockModels.
     */
    skip?: number
    distinct?: BlockModelScalarFieldEnum | BlockModelScalarFieldEnum[]
  }

  /**
   * BlockModel create
   */
  export type BlockModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockModel.
     */
    data: XOR<BlockModelCreateInput, BlockModelUncheckedCreateInput>
  }

  /**
   * BlockModel createMany
   */
  export type BlockModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockModels.
     */
    data: BlockModelCreateManyInput | BlockModelCreateManyInput[]
  }

  /**
   * BlockModel createManyAndReturn
   */
  export type BlockModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * The data used to create many BlockModels.
     */
    data: BlockModelCreateManyInput | BlockModelCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockModel update
   */
  export type BlockModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockModel.
     */
    data: XOR<BlockModelUpdateInput, BlockModelUncheckedUpdateInput>
    /**
     * Choose, which BlockModel to update.
     */
    where: BlockModelWhereUniqueInput
  }

  /**
   * BlockModel updateMany
   */
  export type BlockModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockModels.
     */
    data: XOR<BlockModelUpdateManyMutationInput, BlockModelUncheckedUpdateManyInput>
    /**
     * Filter which BlockModels to update
     */
    where?: BlockModelWhereInput
    /**
     * Limit how many BlockModels to update.
     */
    limit?: number
  }

  /**
   * BlockModel updateManyAndReturn
   */
  export type BlockModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * The data used to update BlockModels.
     */
    data: XOR<BlockModelUpdateManyMutationInput, BlockModelUncheckedUpdateManyInput>
    /**
     * Filter which BlockModels to update
     */
    where?: BlockModelWhereInput
    /**
     * Limit how many BlockModels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockModel upsert
   */
  export type BlockModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockModel to update in case it exists.
     */
    where: BlockModelWhereUniqueInput
    /**
     * In case the BlockModel found by the `where` argument doesn't exist, create a new BlockModel with this data.
     */
    create: XOR<BlockModelCreateInput, BlockModelUncheckedCreateInput>
    /**
     * In case the BlockModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockModelUpdateInput, BlockModelUncheckedUpdateInput>
  }

  /**
   * BlockModel delete
   */
  export type BlockModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelInclude<ExtArgs> | null
    /**
     * Filter which BlockModel to delete.
     */
    where: BlockModelWhereUniqueInput
  }

  /**
   * BlockModel deleteMany
   */
  export type BlockModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockModels to delete
     */
    where?: BlockModelWhereInput
    /**
     * Limit how many BlockModels to delete.
     */
    limit?: number
  }

  /**
   * BlockModel without action
   */
  export type BlockModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockModel
     */
    select?: BlockModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockModel
     */
    omit?: BlockModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockModelInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectModelScalarFieldEnum: {
    title: 'title',
    description: 'description',
    state: 'state',
    slug: 'slug',
    version: 'version',
    tags: 'tags',
    id: 'id',
    createAt: 'createAt',
    updateAt: 'updateAt',
    deletedAt: 'deletedAt',
    tenantId: 'tenantId',
    isActive: 'isActive',
    isDeleted: 'isDeleted'
  };

  export type ProjectModelScalarFieldEnum = (typeof ProjectModelScalarFieldEnum)[keyof typeof ProjectModelScalarFieldEnum]


  export const BlockModelScalarFieldEnum: {
    version: 'version',
    order: 'order',
    slug: 'slug',
    title: 'title',
    description: 'description',
    id: 'id',
    createAt: 'createAt',
    updateAt: 'updateAt',
    deletedAt: 'deletedAt',
    tenantId: 'tenantId',
    isActive: 'isActive',
    isDeleted: 'isDeleted',
    projectId: 'projectId'
  };

  export type BlockModelScalarFieldEnum = (typeof BlockModelScalarFieldEnum)[keyof typeof BlockModelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProjectModelWhereInput = {
    AND?: ProjectModelWhereInput | ProjectModelWhereInput[]
    OR?: ProjectModelWhereInput[]
    NOT?: ProjectModelWhereInput | ProjectModelWhereInput[]
    title?: StringFilter<"ProjectModel"> | string
    description?: StringFilter<"ProjectModel"> | string
    state?: StringFilter<"ProjectModel"> | string
    slug?: StringFilter<"ProjectModel"> | string
    version?: IntFilter<"ProjectModel"> | number
    tags?: StringFilter<"ProjectModel"> | string
    id?: StringFilter<"ProjectModel"> | string
    createAt?: DateTimeFilter<"ProjectModel"> | Date | string
    updateAt?: DateTimeFilter<"ProjectModel"> | Date | string
    deletedAt?: DateTimeFilter<"ProjectModel"> | Date | string
    tenantId?: StringFilter<"ProjectModel"> | string
    isActive?: BoolFilter<"ProjectModel"> | boolean
    isDeleted?: BoolFilter<"ProjectModel"> | boolean
    blocks?: BlockModelListRelationFilter
  }

  export type ProjectModelOrderByWithRelationInput = {
    title?: SortOrder
    description?: SortOrder
    state?: SortOrder
    slug?: SortOrder
    version?: SortOrder
    tags?: SortOrder
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    blocks?: BlockModelOrderByRelationAggregateInput
  }

  export type ProjectModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug_version?: ProjectModelSlugVersionCompoundUniqueInput
    AND?: ProjectModelWhereInput | ProjectModelWhereInput[]
    OR?: ProjectModelWhereInput[]
    NOT?: ProjectModelWhereInput | ProjectModelWhereInput[]
    title?: StringFilter<"ProjectModel"> | string
    description?: StringFilter<"ProjectModel"> | string
    state?: StringFilter<"ProjectModel"> | string
    slug?: StringFilter<"ProjectModel"> | string
    version?: IntFilter<"ProjectModel"> | number
    tags?: StringFilter<"ProjectModel"> | string
    createAt?: DateTimeFilter<"ProjectModel"> | Date | string
    updateAt?: DateTimeFilter<"ProjectModel"> | Date | string
    deletedAt?: DateTimeFilter<"ProjectModel"> | Date | string
    tenantId?: StringFilter<"ProjectModel"> | string
    isActive?: BoolFilter<"ProjectModel"> | boolean
    isDeleted?: BoolFilter<"ProjectModel"> | boolean
    blocks?: BlockModelListRelationFilter
  }, "id" | "slug_version">

  export type ProjectModelOrderByWithAggregationInput = {
    title?: SortOrder
    description?: SortOrder
    state?: SortOrder
    slug?: SortOrder
    version?: SortOrder
    tags?: SortOrder
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    _count?: ProjectModelCountOrderByAggregateInput
    _avg?: ProjectModelAvgOrderByAggregateInput
    _max?: ProjectModelMaxOrderByAggregateInput
    _min?: ProjectModelMinOrderByAggregateInput
    _sum?: ProjectModelSumOrderByAggregateInput
  }

  export type ProjectModelScalarWhereWithAggregatesInput = {
    AND?: ProjectModelScalarWhereWithAggregatesInput | ProjectModelScalarWhereWithAggregatesInput[]
    OR?: ProjectModelScalarWhereWithAggregatesInput[]
    NOT?: ProjectModelScalarWhereWithAggregatesInput | ProjectModelScalarWhereWithAggregatesInput[]
    title?: StringWithAggregatesFilter<"ProjectModel"> | string
    description?: StringWithAggregatesFilter<"ProjectModel"> | string
    state?: StringWithAggregatesFilter<"ProjectModel"> | string
    slug?: StringWithAggregatesFilter<"ProjectModel"> | string
    version?: IntWithAggregatesFilter<"ProjectModel"> | number
    tags?: StringWithAggregatesFilter<"ProjectModel"> | string
    id?: StringWithAggregatesFilter<"ProjectModel"> | string
    createAt?: DateTimeWithAggregatesFilter<"ProjectModel"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"ProjectModel"> | Date | string
    deletedAt?: DateTimeWithAggregatesFilter<"ProjectModel"> | Date | string
    tenantId?: StringWithAggregatesFilter<"ProjectModel"> | string
    isActive?: BoolWithAggregatesFilter<"ProjectModel"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"ProjectModel"> | boolean
  }

  export type BlockModelWhereInput = {
    AND?: BlockModelWhereInput | BlockModelWhereInput[]
    OR?: BlockModelWhereInput[]
    NOT?: BlockModelWhereInput | BlockModelWhereInput[]
    version?: IntFilter<"BlockModel"> | number
    order?: IntFilter<"BlockModel"> | number
    slug?: StringFilter<"BlockModel"> | string
    title?: StringFilter<"BlockModel"> | string
    description?: StringFilter<"BlockModel"> | string
    id?: StringFilter<"BlockModel"> | string
    createAt?: DateTimeFilter<"BlockModel"> | Date | string
    updateAt?: DateTimeFilter<"BlockModel"> | Date | string
    deletedAt?: DateTimeFilter<"BlockModel"> | Date | string
    tenantId?: StringFilter<"BlockModel"> | string
    isActive?: BoolFilter<"BlockModel"> | boolean
    isDeleted?: BoolFilter<"BlockModel"> | boolean
    projectId?: StringFilter<"BlockModel"> | string
    project?: XOR<ProjectModelScalarRelationFilter, ProjectModelWhereInput>
  }

  export type BlockModelOrderByWithRelationInput = {
    version?: SortOrder
    order?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    projectId?: SortOrder
    project?: ProjectModelOrderByWithRelationInput
  }

  export type BlockModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug_version?: BlockModelSlugVersionCompoundUniqueInput
    AND?: BlockModelWhereInput | BlockModelWhereInput[]
    OR?: BlockModelWhereInput[]
    NOT?: BlockModelWhereInput | BlockModelWhereInput[]
    version?: IntFilter<"BlockModel"> | number
    order?: IntFilter<"BlockModel"> | number
    slug?: StringFilter<"BlockModel"> | string
    title?: StringFilter<"BlockModel"> | string
    description?: StringFilter<"BlockModel"> | string
    createAt?: DateTimeFilter<"BlockModel"> | Date | string
    updateAt?: DateTimeFilter<"BlockModel"> | Date | string
    deletedAt?: DateTimeFilter<"BlockModel"> | Date | string
    tenantId?: StringFilter<"BlockModel"> | string
    isActive?: BoolFilter<"BlockModel"> | boolean
    isDeleted?: BoolFilter<"BlockModel"> | boolean
    projectId?: StringFilter<"BlockModel"> | string
    project?: XOR<ProjectModelScalarRelationFilter, ProjectModelWhereInput>
  }, "id" | "slug_version">

  export type BlockModelOrderByWithAggregationInput = {
    version?: SortOrder
    order?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    projectId?: SortOrder
    _count?: BlockModelCountOrderByAggregateInput
    _avg?: BlockModelAvgOrderByAggregateInput
    _max?: BlockModelMaxOrderByAggregateInput
    _min?: BlockModelMinOrderByAggregateInput
    _sum?: BlockModelSumOrderByAggregateInput
  }

  export type BlockModelScalarWhereWithAggregatesInput = {
    AND?: BlockModelScalarWhereWithAggregatesInput | BlockModelScalarWhereWithAggregatesInput[]
    OR?: BlockModelScalarWhereWithAggregatesInput[]
    NOT?: BlockModelScalarWhereWithAggregatesInput | BlockModelScalarWhereWithAggregatesInput[]
    version?: IntWithAggregatesFilter<"BlockModel"> | number
    order?: IntWithAggregatesFilter<"BlockModel"> | number
    slug?: StringWithAggregatesFilter<"BlockModel"> | string
    title?: StringWithAggregatesFilter<"BlockModel"> | string
    description?: StringWithAggregatesFilter<"BlockModel"> | string
    id?: StringWithAggregatesFilter<"BlockModel"> | string
    createAt?: DateTimeWithAggregatesFilter<"BlockModel"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"BlockModel"> | Date | string
    deletedAt?: DateTimeWithAggregatesFilter<"BlockModel"> | Date | string
    tenantId?: StringWithAggregatesFilter<"BlockModel"> | string
    isActive?: BoolWithAggregatesFilter<"BlockModel"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"BlockModel"> | boolean
    projectId?: StringWithAggregatesFilter<"BlockModel"> | string
  }

  export type ProjectModelCreateInput = {
    title: string
    description: string
    state: string
    slug: string
    version: number
    tags: string
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    deletedAt: Date | string
    tenantId: string
    isActive?: boolean
    isDeleted?: boolean
    blocks?: BlockModelCreateNestedManyWithoutProjectInput
  }

  export type ProjectModelUncheckedCreateInput = {
    title: string
    description: string
    state: string
    slug: string
    version: number
    tags: string
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    deletedAt: Date | string
    tenantId: string
    isActive?: boolean
    isDeleted?: boolean
    blocks?: BlockModelUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectModelUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blocks?: BlockModelUpdateManyWithoutProjectNestedInput
  }

  export type ProjectModelUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blocks?: BlockModelUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectModelCreateManyInput = {
    title: string
    description: string
    state: string
    slug: string
    version: number
    tags: string
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    deletedAt: Date | string
    tenantId: string
    isActive?: boolean
    isDeleted?: boolean
  }

  export type ProjectModelUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectModelUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockModelCreateInput = {
    version?: number
    order?: number
    slug: string
    title: string
    description: string
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    deletedAt: Date | string
    tenantId: string
    isActive?: boolean
    isDeleted?: boolean
    project: ProjectModelCreateNestedOneWithoutBlocksInput
  }

  export type BlockModelUncheckedCreateInput = {
    version?: number
    order?: number
    slug: string
    title: string
    description: string
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    deletedAt: Date | string
    tenantId: string
    isActive?: boolean
    isDeleted?: boolean
    projectId: string
  }

  export type BlockModelUpdateInput = {
    version?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectModelUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type BlockModelUncheckedUpdateInput = {
    version?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type BlockModelCreateManyInput = {
    version?: number
    order?: number
    slug: string
    title: string
    description: string
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    deletedAt: Date | string
    tenantId: string
    isActive?: boolean
    isDeleted?: boolean
    projectId: string
  }

  export type BlockModelUpdateManyMutationInput = {
    version?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockModelUncheckedUpdateManyInput = {
    version?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BlockModelListRelationFilter = {
    every?: BlockModelWhereInput
    some?: BlockModelWhereInput
    none?: BlockModelWhereInput
  }

  export type BlockModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectModelSlugVersionCompoundUniqueInput = {
    slug: string
    version: number
  }

  export type ProjectModelCountOrderByAggregateInput = {
    title?: SortOrder
    description?: SortOrder
    state?: SortOrder
    slug?: SortOrder
    version?: SortOrder
    tags?: SortOrder
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProjectModelAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type ProjectModelMaxOrderByAggregateInput = {
    title?: SortOrder
    description?: SortOrder
    state?: SortOrder
    slug?: SortOrder
    version?: SortOrder
    tags?: SortOrder
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProjectModelMinOrderByAggregateInput = {
    title?: SortOrder
    description?: SortOrder
    state?: SortOrder
    slug?: SortOrder
    version?: SortOrder
    tags?: SortOrder
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProjectModelSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectModelScalarRelationFilter = {
    is?: ProjectModelWhereInput
    isNot?: ProjectModelWhereInput
  }

  export type BlockModelSlugVersionCompoundUniqueInput = {
    slug: string
    version: number
  }

  export type BlockModelCountOrderByAggregateInput = {
    version?: SortOrder
    order?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    projectId?: SortOrder
  }

  export type BlockModelAvgOrderByAggregateInput = {
    version?: SortOrder
    order?: SortOrder
  }

  export type BlockModelMaxOrderByAggregateInput = {
    version?: SortOrder
    order?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    projectId?: SortOrder
  }

  export type BlockModelMinOrderByAggregateInput = {
    version?: SortOrder
    order?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    projectId?: SortOrder
  }

  export type BlockModelSumOrderByAggregateInput = {
    version?: SortOrder
    order?: SortOrder
  }

  export type BlockModelCreateNestedManyWithoutProjectInput = {
    create?: XOR<BlockModelCreateWithoutProjectInput, BlockModelUncheckedCreateWithoutProjectInput> | BlockModelCreateWithoutProjectInput[] | BlockModelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BlockModelCreateOrConnectWithoutProjectInput | BlockModelCreateOrConnectWithoutProjectInput[]
    createMany?: BlockModelCreateManyProjectInputEnvelope
    connect?: BlockModelWhereUniqueInput | BlockModelWhereUniqueInput[]
  }

  export type BlockModelUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<BlockModelCreateWithoutProjectInput, BlockModelUncheckedCreateWithoutProjectInput> | BlockModelCreateWithoutProjectInput[] | BlockModelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BlockModelCreateOrConnectWithoutProjectInput | BlockModelCreateOrConnectWithoutProjectInput[]
    createMany?: BlockModelCreateManyProjectInputEnvelope
    connect?: BlockModelWhereUniqueInput | BlockModelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BlockModelUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BlockModelCreateWithoutProjectInput, BlockModelUncheckedCreateWithoutProjectInput> | BlockModelCreateWithoutProjectInput[] | BlockModelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BlockModelCreateOrConnectWithoutProjectInput | BlockModelCreateOrConnectWithoutProjectInput[]
    upsert?: BlockModelUpsertWithWhereUniqueWithoutProjectInput | BlockModelUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BlockModelCreateManyProjectInputEnvelope
    set?: BlockModelWhereUniqueInput | BlockModelWhereUniqueInput[]
    disconnect?: BlockModelWhereUniqueInput | BlockModelWhereUniqueInput[]
    delete?: BlockModelWhereUniqueInput | BlockModelWhereUniqueInput[]
    connect?: BlockModelWhereUniqueInput | BlockModelWhereUniqueInput[]
    update?: BlockModelUpdateWithWhereUniqueWithoutProjectInput | BlockModelUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BlockModelUpdateManyWithWhereWithoutProjectInput | BlockModelUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BlockModelScalarWhereInput | BlockModelScalarWhereInput[]
  }

  export type BlockModelUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BlockModelCreateWithoutProjectInput, BlockModelUncheckedCreateWithoutProjectInput> | BlockModelCreateWithoutProjectInput[] | BlockModelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BlockModelCreateOrConnectWithoutProjectInput | BlockModelCreateOrConnectWithoutProjectInput[]
    upsert?: BlockModelUpsertWithWhereUniqueWithoutProjectInput | BlockModelUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BlockModelCreateManyProjectInputEnvelope
    set?: BlockModelWhereUniqueInput | BlockModelWhereUniqueInput[]
    disconnect?: BlockModelWhereUniqueInput | BlockModelWhereUniqueInput[]
    delete?: BlockModelWhereUniqueInput | BlockModelWhereUniqueInput[]
    connect?: BlockModelWhereUniqueInput | BlockModelWhereUniqueInput[]
    update?: BlockModelUpdateWithWhereUniqueWithoutProjectInput | BlockModelUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BlockModelUpdateManyWithWhereWithoutProjectInput | BlockModelUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BlockModelScalarWhereInput | BlockModelScalarWhereInput[]
  }

  export type ProjectModelCreateNestedOneWithoutBlocksInput = {
    create?: XOR<ProjectModelCreateWithoutBlocksInput, ProjectModelUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: ProjectModelCreateOrConnectWithoutBlocksInput
    connect?: ProjectModelWhereUniqueInput
  }

  export type ProjectModelUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<ProjectModelCreateWithoutBlocksInput, ProjectModelUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: ProjectModelCreateOrConnectWithoutBlocksInput
    upsert?: ProjectModelUpsertWithoutBlocksInput
    connect?: ProjectModelWhereUniqueInput
    update?: XOR<XOR<ProjectModelUpdateToOneWithWhereWithoutBlocksInput, ProjectModelUpdateWithoutBlocksInput>, ProjectModelUncheckedUpdateWithoutBlocksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BlockModelCreateWithoutProjectInput = {
    version?: number
    order?: number
    slug: string
    title: string
    description: string
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    deletedAt: Date | string
    tenantId: string
    isActive?: boolean
    isDeleted?: boolean
  }

  export type BlockModelUncheckedCreateWithoutProjectInput = {
    version?: number
    order?: number
    slug: string
    title: string
    description: string
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    deletedAt: Date | string
    tenantId: string
    isActive?: boolean
    isDeleted?: boolean
  }

  export type BlockModelCreateOrConnectWithoutProjectInput = {
    where: BlockModelWhereUniqueInput
    create: XOR<BlockModelCreateWithoutProjectInput, BlockModelUncheckedCreateWithoutProjectInput>
  }

  export type BlockModelCreateManyProjectInputEnvelope = {
    data: BlockModelCreateManyProjectInput | BlockModelCreateManyProjectInput[]
  }

  export type BlockModelUpsertWithWhereUniqueWithoutProjectInput = {
    where: BlockModelWhereUniqueInput
    update: XOR<BlockModelUpdateWithoutProjectInput, BlockModelUncheckedUpdateWithoutProjectInput>
    create: XOR<BlockModelCreateWithoutProjectInput, BlockModelUncheckedCreateWithoutProjectInput>
  }

  export type BlockModelUpdateWithWhereUniqueWithoutProjectInput = {
    where: BlockModelWhereUniqueInput
    data: XOR<BlockModelUpdateWithoutProjectInput, BlockModelUncheckedUpdateWithoutProjectInput>
  }

  export type BlockModelUpdateManyWithWhereWithoutProjectInput = {
    where: BlockModelScalarWhereInput
    data: XOR<BlockModelUpdateManyMutationInput, BlockModelUncheckedUpdateManyWithoutProjectInput>
  }

  export type BlockModelScalarWhereInput = {
    AND?: BlockModelScalarWhereInput | BlockModelScalarWhereInput[]
    OR?: BlockModelScalarWhereInput[]
    NOT?: BlockModelScalarWhereInput | BlockModelScalarWhereInput[]
    version?: IntFilter<"BlockModel"> | number
    order?: IntFilter<"BlockModel"> | number
    slug?: StringFilter<"BlockModel"> | string
    title?: StringFilter<"BlockModel"> | string
    description?: StringFilter<"BlockModel"> | string
    id?: StringFilter<"BlockModel"> | string
    createAt?: DateTimeFilter<"BlockModel"> | Date | string
    updateAt?: DateTimeFilter<"BlockModel"> | Date | string
    deletedAt?: DateTimeFilter<"BlockModel"> | Date | string
    tenantId?: StringFilter<"BlockModel"> | string
    isActive?: BoolFilter<"BlockModel"> | boolean
    isDeleted?: BoolFilter<"BlockModel"> | boolean
    projectId?: StringFilter<"BlockModel"> | string
  }

  export type ProjectModelCreateWithoutBlocksInput = {
    title: string
    description: string
    state: string
    slug: string
    version: number
    tags: string
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    deletedAt: Date | string
    tenantId: string
    isActive?: boolean
    isDeleted?: boolean
  }

  export type ProjectModelUncheckedCreateWithoutBlocksInput = {
    title: string
    description: string
    state: string
    slug: string
    version: number
    tags: string
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    deletedAt: Date | string
    tenantId: string
    isActive?: boolean
    isDeleted?: boolean
  }

  export type ProjectModelCreateOrConnectWithoutBlocksInput = {
    where: ProjectModelWhereUniqueInput
    create: XOR<ProjectModelCreateWithoutBlocksInput, ProjectModelUncheckedCreateWithoutBlocksInput>
  }

  export type ProjectModelUpsertWithoutBlocksInput = {
    update: XOR<ProjectModelUpdateWithoutBlocksInput, ProjectModelUncheckedUpdateWithoutBlocksInput>
    create: XOR<ProjectModelCreateWithoutBlocksInput, ProjectModelUncheckedCreateWithoutBlocksInput>
    where?: ProjectModelWhereInput
  }

  export type ProjectModelUpdateToOneWithWhereWithoutBlocksInput = {
    where?: ProjectModelWhereInput
    data: XOR<ProjectModelUpdateWithoutBlocksInput, ProjectModelUncheckedUpdateWithoutBlocksInput>
  }

  export type ProjectModelUpdateWithoutBlocksInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectModelUncheckedUpdateWithoutBlocksInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockModelCreateManyProjectInput = {
    version?: number
    order?: number
    slug: string
    title: string
    description: string
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    deletedAt: Date | string
    tenantId: string
    isActive?: boolean
    isDeleted?: boolean
  }

  export type BlockModelUpdateWithoutProjectInput = {
    version?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockModelUncheckedUpdateWithoutProjectInput = {
    version?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockModelUncheckedUpdateManyWithoutProjectInput = {
    version?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}