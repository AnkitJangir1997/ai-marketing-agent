
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
 * Model Website
 * 
 */
export type Website = $Result.DefaultSelection<Prisma.$WebsitePayload>
/**
 * Model SeoAudit
 * 
 */
export type SeoAudit = $Result.DefaultSelection<Prisma.$SeoAuditPayload>
/**
 * Model Keyword
 * 
 */
export type Keyword = $Result.DefaultSelection<Prisma.$KeywordPayload>
/**
 * Model Competitor
 * 
 */
export type Competitor = $Result.DefaultSelection<Prisma.$CompetitorPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model AnalyticsReport
 * 
 */
export type AnalyticsReport = $Result.DefaultSelection<Prisma.$AnalyticsReportPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Websites
 * const websites = await prisma.website.findMany()
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
   * // Fetch zero or more Websites
   * const websites = await prisma.website.findMany()
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
   * `prisma.website`: Exposes CRUD operations for the **Website** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Websites
    * const websites = await prisma.website.findMany()
    * ```
    */
  get website(): Prisma.WebsiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seoAudit`: Exposes CRUD operations for the **SeoAudit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeoAudits
    * const seoAudits = await prisma.seoAudit.findMany()
    * ```
    */
  get seoAudit(): Prisma.SeoAuditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keyword`: Exposes CRUD operations for the **Keyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keywords
    * const keywords = await prisma.keyword.findMany()
    * ```
    */
  get keyword(): Prisma.KeywordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitor`: Exposes CRUD operations for the **Competitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitors
    * const competitors = await prisma.competitor.findMany()
    * ```
    */
  get competitor(): Prisma.CompetitorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyticsReport`: Exposes CRUD operations for the **AnalyticsReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyticsReports
    * const analyticsReports = await prisma.analyticsReport.findMany()
    * ```
    */
  get analyticsReport(): Prisma.AnalyticsReportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
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
    Website: 'Website',
    SeoAudit: 'SeoAudit',
    Keyword: 'Keyword',
    Competitor: 'Competitor',
    BlogPost: 'BlogPost',
    AnalyticsReport: 'AnalyticsReport'
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
      modelProps: "website" | "seoAudit" | "keyword" | "competitor" | "blogPost" | "analyticsReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Website: {
        payload: Prisma.$WebsitePayload<ExtArgs>
        fields: Prisma.WebsiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findFirst: {
            args: Prisma.WebsiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findMany: {
            args: Prisma.WebsiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          create: {
            args: Prisma.WebsiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          createMany: {
            args: Prisma.WebsiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebsiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          delete: {
            args: Prisma.WebsiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          update: {
            args: Prisma.WebsiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          deleteMany: {
            args: Prisma.WebsiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebsiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebsiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          upsert: {
            args: Prisma.WebsiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          aggregate: {
            args: Prisma.WebsiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsite>
          }
          groupBy: {
            args: Prisma.WebsiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsiteCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteCountAggregateOutputType> | number
          }
        }
      }
      SeoAudit: {
        payload: Prisma.$SeoAuditPayload<ExtArgs>
        fields: Prisma.SeoAuditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeoAuditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoAuditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeoAuditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoAuditPayload>
          }
          findFirst: {
            args: Prisma.SeoAuditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoAuditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeoAuditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoAuditPayload>
          }
          findMany: {
            args: Prisma.SeoAuditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoAuditPayload>[]
          }
          create: {
            args: Prisma.SeoAuditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoAuditPayload>
          }
          createMany: {
            args: Prisma.SeoAuditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeoAuditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoAuditPayload>[]
          }
          delete: {
            args: Prisma.SeoAuditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoAuditPayload>
          }
          update: {
            args: Prisma.SeoAuditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoAuditPayload>
          }
          deleteMany: {
            args: Prisma.SeoAuditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeoAuditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeoAuditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoAuditPayload>[]
          }
          upsert: {
            args: Prisma.SeoAuditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoAuditPayload>
          }
          aggregate: {
            args: Prisma.SeoAuditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeoAudit>
          }
          groupBy: {
            args: Prisma.SeoAuditGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeoAuditGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeoAuditCountArgs<ExtArgs>
            result: $Utils.Optional<SeoAuditCountAggregateOutputType> | number
          }
        }
      }
      Keyword: {
        payload: Prisma.$KeywordPayload<ExtArgs>
        fields: Prisma.KeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findFirst: {
            args: Prisma.KeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findMany: {
            args: Prisma.KeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          create: {
            args: Prisma.KeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          createMany: {
            args: Prisma.KeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeywordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          delete: {
            args: Prisma.KeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          update: {
            args: Prisma.KeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          deleteMany: {
            args: Prisma.KeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeywordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          upsert: {
            args: Prisma.KeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          aggregate: {
            args: Prisma.KeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyword>
          }
          groupBy: {
            args: Prisma.KeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeywordCountArgs<ExtArgs>
            result: $Utils.Optional<KeywordCountAggregateOutputType> | number
          }
        }
      }
      Competitor: {
        payload: Prisma.$CompetitorPayload<ExtArgs>
        fields: Prisma.CompetitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          findFirst: {
            args: Prisma.CompetitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          findMany: {
            args: Prisma.CompetitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>[]
          }
          create: {
            args: Prisma.CompetitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          createMany: {
            args: Prisma.CompetitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>[]
          }
          delete: {
            args: Prisma.CompetitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          update: {
            args: Prisma.CompetitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          deleteMany: {
            args: Prisma.CompetitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>[]
          }
          upsert: {
            args: Prisma.CompetitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          aggregate: {
            args: Prisma.CompetitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitor>
          }
          groupBy: {
            args: Prisma.CompetitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitorCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitorCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      AnalyticsReport: {
        payload: Prisma.$AnalyticsReportPayload<ExtArgs>
        fields: Prisma.AnalyticsReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsReportPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsReportPayload>
          }
          findMany: {
            args: Prisma.AnalyticsReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsReportPayload>[]
          }
          create: {
            args: Prisma.AnalyticsReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsReportPayload>
          }
          createMany: {
            args: Prisma.AnalyticsReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsReportPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsReportPayload>
          }
          update: {
            args: Prisma.AnalyticsReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsReportPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsReportPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsReportPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyticsReport>
          }
          groupBy: {
            args: Prisma.AnalyticsReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsReportCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsReportCountAggregateOutputType> | number
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
    website?: WebsiteOmit
    seoAudit?: SeoAuditOmit
    keyword?: KeywordOmit
    competitor?: CompetitorOmit
    blogPost?: BlogPostOmit
    analyticsReport?: AnalyticsReportOmit
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
   * Count Type WebsiteCountOutputType
   */

  export type WebsiteCountOutputType = {
    audits: number
    keywords: number
    blogs: number
    competitors: number
    reports: number
  }

  export type WebsiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audits?: boolean | WebsiteCountOutputTypeCountAuditsArgs
    keywords?: boolean | WebsiteCountOutputTypeCountKeywordsArgs
    blogs?: boolean | WebsiteCountOutputTypeCountBlogsArgs
    competitors?: boolean | WebsiteCountOutputTypeCountCompetitorsArgs
    reports?: boolean | WebsiteCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteCountOutputType
     */
    select?: WebsiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeCountAuditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeoAuditWhereInput
  }

  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeCountKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
  }

  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }

  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeCountCompetitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitorWhereInput
  }

  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Website
   */

  export type AggregateWebsite = {
    _count: WebsiteCountAggregateOutputType | null
    _avg: WebsiteAvgAggregateOutputType | null
    _sum: WebsiteSumAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  export type WebsiteAvgAggregateOutputType = {
    id: number | null
    seoScore: number | null
  }

  export type WebsiteSumAggregateOutputType = {
    id: number | null
    seoScore: number | null
  }

  export type WebsiteMinAggregateOutputType = {
    id: number | null
    name: string | null
    domain: string | null
    country: string | null
    industry: string | null
    language: string | null
    status: string | null
    seoScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebsiteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    domain: string | null
    country: string | null
    industry: string | null
    language: string | null
    status: string | null
    seoScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebsiteCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    country: number
    industry: number
    language: number
    status: number
    seoScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebsiteAvgAggregateInputType = {
    id?: true
    seoScore?: true
  }

  export type WebsiteSumAggregateInputType = {
    id?: true
    seoScore?: true
  }

  export type WebsiteMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    country?: true
    industry?: true
    language?: true
    status?: true
    seoScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebsiteMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    country?: true
    industry?: true
    language?: true
    status?: true
    seoScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebsiteCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    country?: true
    industry?: true
    language?: true
    status?: true
    seoScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebsiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Website to aggregate.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Websites
    **/
    _count?: true | WebsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebsiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebsiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteMaxAggregateInputType
  }

  export type GetWebsiteAggregateType<T extends WebsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsite[P]>
      : GetScalarType<T[P], AggregateWebsite[P]>
  }




  export type WebsiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteWhereInput
    orderBy?: WebsiteOrderByWithAggregationInput | WebsiteOrderByWithAggregationInput[]
    by: WebsiteScalarFieldEnum[] | WebsiteScalarFieldEnum
    having?: WebsiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteCountAggregateInputType | true
    _avg?: WebsiteAvgAggregateInputType
    _sum?: WebsiteSumAggregateInputType
    _min?: WebsiteMinAggregateInputType
    _max?: WebsiteMaxAggregateInputType
  }

  export type WebsiteGroupByOutputType = {
    id: number
    name: string
    domain: string
    country: string | null
    industry: string | null
    language: string | null
    status: string
    seoScore: number
    createdAt: Date
    updatedAt: Date
    _count: WebsiteCountAggregateOutputType | null
    _avg: WebsiteAvgAggregateOutputType | null
    _sum: WebsiteSumAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  type GetWebsiteGroupByPayload<T extends WebsiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    country?: boolean
    industry?: boolean
    language?: boolean
    status?: boolean
    seoScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    audits?: boolean | Website$auditsArgs<ExtArgs>
    keywords?: boolean | Website$keywordsArgs<ExtArgs>
    blogs?: boolean | Website$blogsArgs<ExtArgs>
    competitors?: boolean | Website$competitorsArgs<ExtArgs>
    reports?: boolean | Website$reportsArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    country?: boolean
    industry?: boolean
    language?: boolean
    status?: boolean
    seoScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    country?: boolean
    industry?: boolean
    language?: boolean
    status?: boolean
    seoScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    country?: boolean
    industry?: boolean
    language?: boolean
    status?: boolean
    seoScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WebsiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "country" | "industry" | "language" | "status" | "seoScore" | "createdAt" | "updatedAt", ExtArgs["result"]["website"]>
  export type WebsiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audits?: boolean | Website$auditsArgs<ExtArgs>
    keywords?: boolean | Website$keywordsArgs<ExtArgs>
    blogs?: boolean | Website$blogsArgs<ExtArgs>
    competitors?: boolean | Website$competitorsArgs<ExtArgs>
    reports?: boolean | Website$reportsArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebsiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WebsiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WebsitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Website"
    objects: {
      audits: Prisma.$SeoAuditPayload<ExtArgs>[]
      keywords: Prisma.$KeywordPayload<ExtArgs>[]
      blogs: Prisma.$BlogPostPayload<ExtArgs>[]
      competitors: Prisma.$CompetitorPayload<ExtArgs>[]
      reports: Prisma.$AnalyticsReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      domain: string
      country: string | null
      industry: string | null
      language: string | null
      status: string
      seoScore: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["website"]>
    composites: {}
  }

  type WebsiteGetPayload<S extends boolean | null | undefined | WebsiteDefaultArgs> = $Result.GetResult<Prisma.$WebsitePayload, S>

  type WebsiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebsiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteCountAggregateInputType | true
    }

  export interface WebsiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Website'], meta: { name: 'Website' } }
    /**
     * Find zero or one Website that matches the filter.
     * @param {WebsiteFindUniqueArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebsiteFindUniqueArgs>(args: SelectSubset<T, WebsiteFindUniqueArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Website that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebsiteFindUniqueOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebsiteFindUniqueOrThrowArgs>(args: SelectSubset<T, WebsiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Website that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebsiteFindFirstArgs>(args?: SelectSubset<T, WebsiteFindFirstArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Website that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebsiteFindFirstOrThrowArgs>(args?: SelectSubset<T, WebsiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Websites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Websites
     * const websites = await prisma.website.findMany()
     * 
     * // Get first 10 Websites
     * const websites = await prisma.website.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteWithIdOnly = await prisma.website.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebsiteFindManyArgs>(args?: SelectSubset<T, WebsiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Website.
     * @param {WebsiteCreateArgs} args - Arguments to create a Website.
     * @example
     * // Create one Website
     * const Website = await prisma.website.create({
     *   data: {
     *     // ... data to create a Website
     *   }
     * })
     * 
     */
    create<T extends WebsiteCreateArgs>(args: SelectSubset<T, WebsiteCreateArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Websites.
     * @param {WebsiteCreateManyArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebsiteCreateManyArgs>(args?: SelectSubset<T, WebsiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Websites and returns the data saved in the database.
     * @param {WebsiteCreateManyAndReturnArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebsiteCreateManyAndReturnArgs>(args?: SelectSubset<T, WebsiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Website.
     * @param {WebsiteDeleteArgs} args - Arguments to delete one Website.
     * @example
     * // Delete one Website
     * const Website = await prisma.website.delete({
     *   where: {
     *     // ... filter to delete one Website
     *   }
     * })
     * 
     */
    delete<T extends WebsiteDeleteArgs>(args: SelectSubset<T, WebsiteDeleteArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Website.
     * @param {WebsiteUpdateArgs} args - Arguments to update one Website.
     * @example
     * // Update one Website
     * const website = await prisma.website.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebsiteUpdateArgs>(args: SelectSubset<T, WebsiteUpdateArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Websites.
     * @param {WebsiteDeleteManyArgs} args - Arguments to filter Websites to delete.
     * @example
     * // Delete a few Websites
     * const { count } = await prisma.website.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebsiteDeleteManyArgs>(args?: SelectSubset<T, WebsiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebsiteUpdateManyArgs>(args: SelectSubset<T, WebsiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites and returns the data updated in the database.
     * @param {WebsiteUpdateManyAndReturnArgs} args - Arguments to update many Websites.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends WebsiteUpdateManyAndReturnArgs>(args: SelectSubset<T, WebsiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Website.
     * @param {WebsiteUpsertArgs} args - Arguments to update or create a Website.
     * @example
     * // Update or create a Website
     * const website = await prisma.website.upsert({
     *   create: {
     *     // ... data to create a Website
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Website we want to update
     *   }
     * })
     */
    upsert<T extends WebsiteUpsertArgs>(args: SelectSubset<T, WebsiteUpsertArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteCountArgs} args - Arguments to filter Websites to count.
     * @example
     * // Count the number of Websites
     * const count = await prisma.website.count({
     *   where: {
     *     // ... the filter for the Websites we want to count
     *   }
     * })
    **/
    count<T extends WebsiteCountArgs>(
      args?: Subset<T, WebsiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebsiteAggregateArgs>(args: Subset<T, WebsiteAggregateArgs>): Prisma.PrismaPromise<GetWebsiteAggregateType<T>>

    /**
     * Group by Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteGroupByArgs} args - Group by arguments.
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
      T extends WebsiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebsiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Website model
   */
  readonly fields: WebsiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Website.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audits<T extends Website$auditsArgs<ExtArgs> = {}>(args?: Subset<T, Website$auditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    keywords<T extends Website$keywordsArgs<ExtArgs> = {}>(args?: Subset<T, Website$keywordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogs<T extends Website$blogsArgs<ExtArgs> = {}>(args?: Subset<T, Website$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    competitors<T extends Website$competitorsArgs<ExtArgs> = {}>(args?: Subset<T, Website$competitorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends Website$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Website$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Website model
   */
  interface WebsiteFieldRefs {
    readonly id: FieldRef<"Website", 'Int'>
    readonly name: FieldRef<"Website", 'String'>
    readonly domain: FieldRef<"Website", 'String'>
    readonly country: FieldRef<"Website", 'String'>
    readonly industry: FieldRef<"Website", 'String'>
    readonly language: FieldRef<"Website", 'String'>
    readonly status: FieldRef<"Website", 'String'>
    readonly seoScore: FieldRef<"Website", 'Int'>
    readonly createdAt: FieldRef<"Website", 'DateTime'>
    readonly updatedAt: FieldRef<"Website", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Website findUnique
   */
  export type WebsiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website findUniqueOrThrow
   */
  export type WebsiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website findFirst
   */
  export type WebsiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website findFirstOrThrow
   */
  export type WebsiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website findMany
   */
  export type WebsiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Websites to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website create
   */
  export type WebsiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Website.
     */
    data: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
  }

  /**
   * Website createMany
   */
  export type WebsiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Website createManyAndReturn
   */
  export type WebsiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Website update
   */
  export type WebsiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Website.
     */
    data: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
    /**
     * Choose, which Website to update.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website updateMany
   */
  export type WebsiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to update.
     */
    limit?: number
  }

  /**
   * Website updateManyAndReturn
   */
  export type WebsiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to update.
     */
    limit?: number
  }

  /**
   * Website upsert
   */
  export type WebsiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Website to update in case it exists.
     */
    where: WebsiteWhereUniqueInput
    /**
     * In case the Website found by the `where` argument doesn't exist, create a new Website with this data.
     */
    create: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
    /**
     * In case the Website was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
  }

  /**
   * Website delete
   */
  export type WebsiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter which Website to delete.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website deleteMany
   */
  export type WebsiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Websites to delete
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to delete.
     */
    limit?: number
  }

  /**
   * Website.audits
   */
  export type Website$auditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditInclude<ExtArgs> | null
    where?: SeoAuditWhereInput
    orderBy?: SeoAuditOrderByWithRelationInput | SeoAuditOrderByWithRelationInput[]
    cursor?: SeoAuditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeoAuditScalarFieldEnum | SeoAuditScalarFieldEnum[]
  }

  /**
   * Website.keywords
   */
  export type Website$keywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    cursor?: KeywordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Website.blogs
   */
  export type Website$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * Website.competitors
   */
  export type Website$competitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    where?: CompetitorWhereInput
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    cursor?: CompetitorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[]
  }

  /**
   * Website.reports
   */
  export type Website$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportInclude<ExtArgs> | null
    where?: AnalyticsReportWhereInput
    orderBy?: AnalyticsReportOrderByWithRelationInput | AnalyticsReportOrderByWithRelationInput[]
    cursor?: AnalyticsReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsReportScalarFieldEnum | AnalyticsReportScalarFieldEnum[]
  }

  /**
   * Website without action
   */
  export type WebsiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
  }


  /**
   * Model SeoAudit
   */

  export type AggregateSeoAudit = {
    _count: SeoAuditCountAggregateOutputType | null
    _avg: SeoAuditAvgAggregateOutputType | null
    _sum: SeoAuditSumAggregateOutputType | null
    _min: SeoAuditMinAggregateOutputType | null
    _max: SeoAuditMaxAggregateOutputType | null
  }

  export type SeoAuditAvgAggregateOutputType = {
    id: number | null
    websiteId: number | null
    healthScore: number | null
    criticalCount: number | null
    warningCount: number | null
    noticeCount: number | null
    pagesCrawled: number | null
  }

  export type SeoAuditSumAggregateOutputType = {
    id: number | null
    websiteId: number | null
    healthScore: number | null
    criticalCount: number | null
    warningCount: number | null
    noticeCount: number | null
    pagesCrawled: number | null
  }

  export type SeoAuditMinAggregateOutputType = {
    id: number | null
    websiteId: number | null
    healthScore: number | null
    criticalCount: number | null
    warningCount: number | null
    noticeCount: number | null
    pagesCrawled: number | null
    createdAt: Date | null
  }

  export type SeoAuditMaxAggregateOutputType = {
    id: number | null
    websiteId: number | null
    healthScore: number | null
    criticalCount: number | null
    warningCount: number | null
    noticeCount: number | null
    pagesCrawled: number | null
    createdAt: Date | null
  }

  export type SeoAuditCountAggregateOutputType = {
    id: number
    websiteId: number
    healthScore: number
    criticalCount: number
    warningCount: number
    noticeCount: number
    pagesCrawled: number
    issues: number
    createdAt: number
    _all: number
  }


  export type SeoAuditAvgAggregateInputType = {
    id?: true
    websiteId?: true
    healthScore?: true
    criticalCount?: true
    warningCount?: true
    noticeCount?: true
    pagesCrawled?: true
  }

  export type SeoAuditSumAggregateInputType = {
    id?: true
    websiteId?: true
    healthScore?: true
    criticalCount?: true
    warningCount?: true
    noticeCount?: true
    pagesCrawled?: true
  }

  export type SeoAuditMinAggregateInputType = {
    id?: true
    websiteId?: true
    healthScore?: true
    criticalCount?: true
    warningCount?: true
    noticeCount?: true
    pagesCrawled?: true
    createdAt?: true
  }

  export type SeoAuditMaxAggregateInputType = {
    id?: true
    websiteId?: true
    healthScore?: true
    criticalCount?: true
    warningCount?: true
    noticeCount?: true
    pagesCrawled?: true
    createdAt?: true
  }

  export type SeoAuditCountAggregateInputType = {
    id?: true
    websiteId?: true
    healthScore?: true
    criticalCount?: true
    warningCount?: true
    noticeCount?: true
    pagesCrawled?: true
    issues?: true
    createdAt?: true
    _all?: true
  }

  export type SeoAuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoAudit to aggregate.
     */
    where?: SeoAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoAudits to fetch.
     */
    orderBy?: SeoAuditOrderByWithRelationInput | SeoAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeoAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeoAudits
    **/
    _count?: true | SeoAuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeoAuditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeoAuditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeoAuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeoAuditMaxAggregateInputType
  }

  export type GetSeoAuditAggregateType<T extends SeoAuditAggregateArgs> = {
        [P in keyof T & keyof AggregateSeoAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeoAudit[P]>
      : GetScalarType<T[P], AggregateSeoAudit[P]>
  }




  export type SeoAuditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeoAuditWhereInput
    orderBy?: SeoAuditOrderByWithAggregationInput | SeoAuditOrderByWithAggregationInput[]
    by: SeoAuditScalarFieldEnum[] | SeoAuditScalarFieldEnum
    having?: SeoAuditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeoAuditCountAggregateInputType | true
    _avg?: SeoAuditAvgAggregateInputType
    _sum?: SeoAuditSumAggregateInputType
    _min?: SeoAuditMinAggregateInputType
    _max?: SeoAuditMaxAggregateInputType
  }

  export type SeoAuditGroupByOutputType = {
    id: number
    websiteId: number
    healthScore: number
    criticalCount: number
    warningCount: number
    noticeCount: number
    pagesCrawled: number
    issues: JsonValue
    createdAt: Date
    _count: SeoAuditCountAggregateOutputType | null
    _avg: SeoAuditAvgAggregateOutputType | null
    _sum: SeoAuditSumAggregateOutputType | null
    _min: SeoAuditMinAggregateOutputType | null
    _max: SeoAuditMaxAggregateOutputType | null
  }

  type GetSeoAuditGroupByPayload<T extends SeoAuditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeoAuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeoAuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeoAuditGroupByOutputType[P]>
            : GetScalarType<T[P], SeoAuditGroupByOutputType[P]>
        }
      >
    >


  export type SeoAuditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    healthScore?: boolean
    criticalCount?: boolean
    warningCount?: boolean
    noticeCount?: boolean
    pagesCrawled?: boolean
    issues?: boolean
    createdAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seoAudit"]>

  export type SeoAuditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    healthScore?: boolean
    criticalCount?: boolean
    warningCount?: boolean
    noticeCount?: boolean
    pagesCrawled?: boolean
    issues?: boolean
    createdAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seoAudit"]>

  export type SeoAuditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    healthScore?: boolean
    criticalCount?: boolean
    warningCount?: boolean
    noticeCount?: boolean
    pagesCrawled?: boolean
    issues?: boolean
    createdAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seoAudit"]>

  export type SeoAuditSelectScalar = {
    id?: boolean
    websiteId?: boolean
    healthScore?: boolean
    criticalCount?: boolean
    warningCount?: boolean
    noticeCount?: boolean
    pagesCrawled?: boolean
    issues?: boolean
    createdAt?: boolean
  }

  export type SeoAuditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "websiteId" | "healthScore" | "criticalCount" | "warningCount" | "noticeCount" | "pagesCrawled" | "issues" | "createdAt", ExtArgs["result"]["seoAudit"]>
  export type SeoAuditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type SeoAuditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type SeoAuditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }

  export type $SeoAuditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeoAudit"
    objects: {
      website: Prisma.$WebsitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      websiteId: number
      healthScore: number
      criticalCount: number
      warningCount: number
      noticeCount: number
      pagesCrawled: number
      issues: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["seoAudit"]>
    composites: {}
  }

  type SeoAuditGetPayload<S extends boolean | null | undefined | SeoAuditDefaultArgs> = $Result.GetResult<Prisma.$SeoAuditPayload, S>

  type SeoAuditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeoAuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeoAuditCountAggregateInputType | true
    }

  export interface SeoAuditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeoAudit'], meta: { name: 'SeoAudit' } }
    /**
     * Find zero or one SeoAudit that matches the filter.
     * @param {SeoAuditFindUniqueArgs} args - Arguments to find a SeoAudit
     * @example
     * // Get one SeoAudit
     * const seoAudit = await prisma.seoAudit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeoAuditFindUniqueArgs>(args: SelectSubset<T, SeoAuditFindUniqueArgs<ExtArgs>>): Prisma__SeoAuditClient<$Result.GetResult<Prisma.$SeoAuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeoAudit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeoAuditFindUniqueOrThrowArgs} args - Arguments to find a SeoAudit
     * @example
     * // Get one SeoAudit
     * const seoAudit = await prisma.seoAudit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeoAuditFindUniqueOrThrowArgs>(args: SelectSubset<T, SeoAuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeoAuditClient<$Result.GetResult<Prisma.$SeoAuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoAudit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoAuditFindFirstArgs} args - Arguments to find a SeoAudit
     * @example
     * // Get one SeoAudit
     * const seoAudit = await prisma.seoAudit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeoAuditFindFirstArgs>(args?: SelectSubset<T, SeoAuditFindFirstArgs<ExtArgs>>): Prisma__SeoAuditClient<$Result.GetResult<Prisma.$SeoAuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoAudit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoAuditFindFirstOrThrowArgs} args - Arguments to find a SeoAudit
     * @example
     * // Get one SeoAudit
     * const seoAudit = await prisma.seoAudit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeoAuditFindFirstOrThrowArgs>(args?: SelectSubset<T, SeoAuditFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeoAuditClient<$Result.GetResult<Prisma.$SeoAuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeoAudits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoAuditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeoAudits
     * const seoAudits = await prisma.seoAudit.findMany()
     * 
     * // Get first 10 SeoAudits
     * const seoAudits = await prisma.seoAudit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seoAuditWithIdOnly = await prisma.seoAudit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeoAuditFindManyArgs>(args?: SelectSubset<T, SeoAuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeoAudit.
     * @param {SeoAuditCreateArgs} args - Arguments to create a SeoAudit.
     * @example
     * // Create one SeoAudit
     * const SeoAudit = await prisma.seoAudit.create({
     *   data: {
     *     // ... data to create a SeoAudit
     *   }
     * })
     * 
     */
    create<T extends SeoAuditCreateArgs>(args: SelectSubset<T, SeoAuditCreateArgs<ExtArgs>>): Prisma__SeoAuditClient<$Result.GetResult<Prisma.$SeoAuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeoAudits.
     * @param {SeoAuditCreateManyArgs} args - Arguments to create many SeoAudits.
     * @example
     * // Create many SeoAudits
     * const seoAudit = await prisma.seoAudit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeoAuditCreateManyArgs>(args?: SelectSubset<T, SeoAuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeoAudits and returns the data saved in the database.
     * @param {SeoAuditCreateManyAndReturnArgs} args - Arguments to create many SeoAudits.
     * @example
     * // Create many SeoAudits
     * const seoAudit = await prisma.seoAudit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeoAudits and only return the `id`
     * const seoAuditWithIdOnly = await prisma.seoAudit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeoAuditCreateManyAndReturnArgs>(args?: SelectSubset<T, SeoAuditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoAuditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeoAudit.
     * @param {SeoAuditDeleteArgs} args - Arguments to delete one SeoAudit.
     * @example
     * // Delete one SeoAudit
     * const SeoAudit = await prisma.seoAudit.delete({
     *   where: {
     *     // ... filter to delete one SeoAudit
     *   }
     * })
     * 
     */
    delete<T extends SeoAuditDeleteArgs>(args: SelectSubset<T, SeoAuditDeleteArgs<ExtArgs>>): Prisma__SeoAuditClient<$Result.GetResult<Prisma.$SeoAuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeoAudit.
     * @param {SeoAuditUpdateArgs} args - Arguments to update one SeoAudit.
     * @example
     * // Update one SeoAudit
     * const seoAudit = await prisma.seoAudit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeoAuditUpdateArgs>(args: SelectSubset<T, SeoAuditUpdateArgs<ExtArgs>>): Prisma__SeoAuditClient<$Result.GetResult<Prisma.$SeoAuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeoAudits.
     * @param {SeoAuditDeleteManyArgs} args - Arguments to filter SeoAudits to delete.
     * @example
     * // Delete a few SeoAudits
     * const { count } = await prisma.seoAudit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeoAuditDeleteManyArgs>(args?: SelectSubset<T, SeoAuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeoAudits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoAuditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeoAudits
     * const seoAudit = await prisma.seoAudit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeoAuditUpdateManyArgs>(args: SelectSubset<T, SeoAuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeoAudits and returns the data updated in the database.
     * @param {SeoAuditUpdateManyAndReturnArgs} args - Arguments to update many SeoAudits.
     * @example
     * // Update many SeoAudits
     * const seoAudit = await prisma.seoAudit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeoAudits and only return the `id`
     * const seoAuditWithIdOnly = await prisma.seoAudit.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SeoAuditUpdateManyAndReturnArgs>(args: SelectSubset<T, SeoAuditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoAuditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeoAudit.
     * @param {SeoAuditUpsertArgs} args - Arguments to update or create a SeoAudit.
     * @example
     * // Update or create a SeoAudit
     * const seoAudit = await prisma.seoAudit.upsert({
     *   create: {
     *     // ... data to create a SeoAudit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeoAudit we want to update
     *   }
     * })
     */
    upsert<T extends SeoAuditUpsertArgs>(args: SelectSubset<T, SeoAuditUpsertArgs<ExtArgs>>): Prisma__SeoAuditClient<$Result.GetResult<Prisma.$SeoAuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeoAudits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoAuditCountArgs} args - Arguments to filter SeoAudits to count.
     * @example
     * // Count the number of SeoAudits
     * const count = await prisma.seoAudit.count({
     *   where: {
     *     // ... the filter for the SeoAudits we want to count
     *   }
     * })
    **/
    count<T extends SeoAuditCountArgs>(
      args?: Subset<T, SeoAuditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeoAuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeoAudit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoAuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeoAuditAggregateArgs>(args: Subset<T, SeoAuditAggregateArgs>): Prisma.PrismaPromise<GetSeoAuditAggregateType<T>>

    /**
     * Group by SeoAudit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoAuditGroupByArgs} args - Group by arguments.
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
      T extends SeoAuditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeoAuditGroupByArgs['orderBy'] }
        : { orderBy?: SeoAuditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeoAuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeoAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeoAudit model
   */
  readonly fields: SeoAuditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeoAudit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeoAuditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    website<T extends WebsiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebsiteDefaultArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SeoAudit model
   */
  interface SeoAuditFieldRefs {
    readonly id: FieldRef<"SeoAudit", 'Int'>
    readonly websiteId: FieldRef<"SeoAudit", 'Int'>
    readonly healthScore: FieldRef<"SeoAudit", 'Int'>
    readonly criticalCount: FieldRef<"SeoAudit", 'Int'>
    readonly warningCount: FieldRef<"SeoAudit", 'Int'>
    readonly noticeCount: FieldRef<"SeoAudit", 'Int'>
    readonly pagesCrawled: FieldRef<"SeoAudit", 'Int'>
    readonly issues: FieldRef<"SeoAudit", 'Json'>
    readonly createdAt: FieldRef<"SeoAudit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeoAudit findUnique
   */
  export type SeoAuditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditInclude<ExtArgs> | null
    /**
     * Filter, which SeoAudit to fetch.
     */
    where: SeoAuditWhereUniqueInput
  }

  /**
   * SeoAudit findUniqueOrThrow
   */
  export type SeoAuditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditInclude<ExtArgs> | null
    /**
     * Filter, which SeoAudit to fetch.
     */
    where: SeoAuditWhereUniqueInput
  }

  /**
   * SeoAudit findFirst
   */
  export type SeoAuditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditInclude<ExtArgs> | null
    /**
     * Filter, which SeoAudit to fetch.
     */
    where?: SeoAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoAudits to fetch.
     */
    orderBy?: SeoAuditOrderByWithRelationInput | SeoAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoAudits.
     */
    cursor?: SeoAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoAudits.
     */
    distinct?: SeoAuditScalarFieldEnum | SeoAuditScalarFieldEnum[]
  }

  /**
   * SeoAudit findFirstOrThrow
   */
  export type SeoAuditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditInclude<ExtArgs> | null
    /**
     * Filter, which SeoAudit to fetch.
     */
    where?: SeoAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoAudits to fetch.
     */
    orderBy?: SeoAuditOrderByWithRelationInput | SeoAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoAudits.
     */
    cursor?: SeoAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoAudits.
     */
    distinct?: SeoAuditScalarFieldEnum | SeoAuditScalarFieldEnum[]
  }

  /**
   * SeoAudit findMany
   */
  export type SeoAuditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditInclude<ExtArgs> | null
    /**
     * Filter, which SeoAudits to fetch.
     */
    where?: SeoAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoAudits to fetch.
     */
    orderBy?: SeoAuditOrderByWithRelationInput | SeoAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeoAudits.
     */
    cursor?: SeoAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoAudits.
     */
    skip?: number
    distinct?: SeoAuditScalarFieldEnum | SeoAuditScalarFieldEnum[]
  }

  /**
   * SeoAudit create
   */
  export type SeoAuditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditInclude<ExtArgs> | null
    /**
     * The data needed to create a SeoAudit.
     */
    data: XOR<SeoAuditCreateInput, SeoAuditUncheckedCreateInput>
  }

  /**
   * SeoAudit createMany
   */
  export type SeoAuditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeoAudits.
     */
    data: SeoAuditCreateManyInput | SeoAuditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeoAudit createManyAndReturn
   */
  export type SeoAuditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * The data used to create many SeoAudits.
     */
    data: SeoAuditCreateManyInput | SeoAuditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeoAudit update
   */
  export type SeoAuditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditInclude<ExtArgs> | null
    /**
     * The data needed to update a SeoAudit.
     */
    data: XOR<SeoAuditUpdateInput, SeoAuditUncheckedUpdateInput>
    /**
     * Choose, which SeoAudit to update.
     */
    where: SeoAuditWhereUniqueInput
  }

  /**
   * SeoAudit updateMany
   */
  export type SeoAuditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeoAudits.
     */
    data: XOR<SeoAuditUpdateManyMutationInput, SeoAuditUncheckedUpdateManyInput>
    /**
     * Filter which SeoAudits to update
     */
    where?: SeoAuditWhereInput
    /**
     * Limit how many SeoAudits to update.
     */
    limit?: number
  }

  /**
   * SeoAudit updateManyAndReturn
   */
  export type SeoAuditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * The data used to update SeoAudits.
     */
    data: XOR<SeoAuditUpdateManyMutationInput, SeoAuditUncheckedUpdateManyInput>
    /**
     * Filter which SeoAudits to update
     */
    where?: SeoAuditWhereInput
    /**
     * Limit how many SeoAudits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeoAudit upsert
   */
  export type SeoAuditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditInclude<ExtArgs> | null
    /**
     * The filter to search for the SeoAudit to update in case it exists.
     */
    where: SeoAuditWhereUniqueInput
    /**
     * In case the SeoAudit found by the `where` argument doesn't exist, create a new SeoAudit with this data.
     */
    create: XOR<SeoAuditCreateInput, SeoAuditUncheckedCreateInput>
    /**
     * In case the SeoAudit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeoAuditUpdateInput, SeoAuditUncheckedUpdateInput>
  }

  /**
   * SeoAudit delete
   */
  export type SeoAuditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditInclude<ExtArgs> | null
    /**
     * Filter which SeoAudit to delete.
     */
    where: SeoAuditWhereUniqueInput
  }

  /**
   * SeoAudit deleteMany
   */
  export type SeoAuditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoAudits to delete
     */
    where?: SeoAuditWhereInput
    /**
     * Limit how many SeoAudits to delete.
     */
    limit?: number
  }

  /**
   * SeoAudit without action
   */
  export type SeoAuditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoAudit
     */
    select?: SeoAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoAudit
     */
    omit?: SeoAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoAuditInclude<ExtArgs> | null
  }


  /**
   * Model Keyword
   */

  export type AggregateKeyword = {
    _count: KeywordCountAggregateOutputType | null
    _avg: KeywordAvgAggregateOutputType | null
    _sum: KeywordSumAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  export type KeywordAvgAggregateOutputType = {
    id: number | null
    websiteId: number | null
    volume: number | null
    difficulty: number | null
  }

  export type KeywordSumAggregateOutputType = {
    id: number | null
    websiteId: number | null
    volume: number | null
    difficulty: number | null
  }

  export type KeywordMinAggregateOutputType = {
    id: number | null
    websiteId: number | null
    term: string | null
    volume: number | null
    difficulty: number | null
    cpc: string | null
    intent: string | null
    cluster: string | null
    status: string | null
    createdAt: Date | null
  }

  export type KeywordMaxAggregateOutputType = {
    id: number | null
    websiteId: number | null
    term: string | null
    volume: number | null
    difficulty: number | null
    cpc: string | null
    intent: string | null
    cluster: string | null
    status: string | null
    createdAt: Date | null
  }

  export type KeywordCountAggregateOutputType = {
    id: number
    websiteId: number
    term: number
    volume: number
    difficulty: number
    cpc: number
    intent: number
    cluster: number
    status: number
    createdAt: number
    _all: number
  }


  export type KeywordAvgAggregateInputType = {
    id?: true
    websiteId?: true
    volume?: true
    difficulty?: true
  }

  export type KeywordSumAggregateInputType = {
    id?: true
    websiteId?: true
    volume?: true
    difficulty?: true
  }

  export type KeywordMinAggregateInputType = {
    id?: true
    websiteId?: true
    term?: true
    volume?: true
    difficulty?: true
    cpc?: true
    intent?: true
    cluster?: true
    status?: true
    createdAt?: true
  }

  export type KeywordMaxAggregateInputType = {
    id?: true
    websiteId?: true
    term?: true
    volume?: true
    difficulty?: true
    cpc?: true
    intent?: true
    cluster?: true
    status?: true
    createdAt?: true
  }

  export type KeywordCountAggregateInputType = {
    id?: true
    websiteId?: true
    term?: true
    volume?: true
    difficulty?: true
    cpc?: true
    intent?: true
    cluster?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type KeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keyword to aggregate.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keywords
    **/
    _count?: true | KeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeywordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeywordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeywordMaxAggregateInputType
  }

  export type GetKeywordAggregateType<T extends KeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyword[P]>
      : GetScalarType<T[P], AggregateKeyword[P]>
  }




  export type KeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithAggregationInput | KeywordOrderByWithAggregationInput[]
    by: KeywordScalarFieldEnum[] | KeywordScalarFieldEnum
    having?: KeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeywordCountAggregateInputType | true
    _avg?: KeywordAvgAggregateInputType
    _sum?: KeywordSumAggregateInputType
    _min?: KeywordMinAggregateInputType
    _max?: KeywordMaxAggregateInputType
  }

  export type KeywordGroupByOutputType = {
    id: number
    websiteId: number
    term: string
    volume: number
    difficulty: number
    cpc: string
    intent: string
    cluster: string | null
    status: string
    createdAt: Date
    _count: KeywordCountAggregateOutputType | null
    _avg: KeywordAvgAggregateOutputType | null
    _sum: KeywordSumAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  type GetKeywordGroupByPayload<T extends KeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeywordGroupByOutputType[P]>
            : GetScalarType<T[P], KeywordGroupByOutputType[P]>
        }
      >
    >


  export type KeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    term?: boolean
    volume?: boolean
    difficulty?: boolean
    cpc?: boolean
    intent?: boolean
    cluster?: boolean
    status?: boolean
    createdAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    term?: boolean
    volume?: boolean
    difficulty?: boolean
    cpc?: boolean
    intent?: boolean
    cluster?: boolean
    status?: boolean
    createdAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    term?: boolean
    volume?: boolean
    difficulty?: boolean
    cpc?: boolean
    intent?: boolean
    cluster?: boolean
    status?: boolean
    createdAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectScalar = {
    id?: boolean
    websiteId?: boolean
    term?: boolean
    volume?: boolean
    difficulty?: boolean
    cpc?: boolean
    intent?: boolean
    cluster?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type KeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "websiteId" | "term" | "volume" | "difficulty" | "cpc" | "intent" | "cluster" | "status" | "createdAt", ExtArgs["result"]["keyword"]>
  export type KeywordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type KeywordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type KeywordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }

  export type $KeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keyword"
    objects: {
      website: Prisma.$WebsitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      websiteId: number
      term: string
      volume: number
      difficulty: number
      cpc: string
      intent: string
      cluster: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["keyword"]>
    composites: {}
  }

  type KeywordGetPayload<S extends boolean | null | undefined | KeywordDefaultArgs> = $Result.GetResult<Prisma.$KeywordPayload, S>

  type KeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeywordCountAggregateInputType | true
    }

  export interface KeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keyword'], meta: { name: 'Keyword' } }
    /**
     * Find zero or one Keyword that matches the filter.
     * @param {KeywordFindUniqueArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeywordFindUniqueArgs>(args: SelectSubset<T, KeywordFindUniqueArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeywordFindUniqueOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, KeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeywordFindFirstArgs>(args?: SelectSubset<T, KeywordFindFirstArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, KeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keywords
     * const keywords = await prisma.keyword.findMany()
     * 
     * // Get first 10 Keywords
     * const keywords = await prisma.keyword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keywordWithIdOnly = await prisma.keyword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeywordFindManyArgs>(args?: SelectSubset<T, KeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keyword.
     * @param {KeywordCreateArgs} args - Arguments to create a Keyword.
     * @example
     * // Create one Keyword
     * const Keyword = await prisma.keyword.create({
     *   data: {
     *     // ... data to create a Keyword
     *   }
     * })
     * 
     */
    create<T extends KeywordCreateArgs>(args: SelectSubset<T, KeywordCreateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keywords.
     * @param {KeywordCreateManyArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeywordCreateManyArgs>(args?: SelectSubset<T, KeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keywords and returns the data saved in the database.
     * @param {KeywordCreateManyAndReturnArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keywords and only return the `id`
     * const keywordWithIdOnly = await prisma.keyword.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeywordCreateManyAndReturnArgs>(args?: SelectSubset<T, KeywordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Keyword.
     * @param {KeywordDeleteArgs} args - Arguments to delete one Keyword.
     * @example
     * // Delete one Keyword
     * const Keyword = await prisma.keyword.delete({
     *   where: {
     *     // ... filter to delete one Keyword
     *   }
     * })
     * 
     */
    delete<T extends KeywordDeleteArgs>(args: SelectSubset<T, KeywordDeleteArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keyword.
     * @param {KeywordUpdateArgs} args - Arguments to update one Keyword.
     * @example
     * // Update one Keyword
     * const keyword = await prisma.keyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeywordUpdateArgs>(args: SelectSubset<T, KeywordUpdateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keywords.
     * @param {KeywordDeleteManyArgs} args - Arguments to filter Keywords to delete.
     * @example
     * // Delete a few Keywords
     * const { count } = await prisma.keyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeywordDeleteManyArgs>(args?: SelectSubset<T, KeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeywordUpdateManyArgs>(args: SelectSubset<T, KeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords and returns the data updated in the database.
     * @param {KeywordUpdateManyAndReturnArgs} args - Arguments to update many Keywords.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keywords and only return the `id`
     * const keywordWithIdOnly = await prisma.keyword.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends KeywordUpdateManyAndReturnArgs>(args: SelectSubset<T, KeywordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Keyword.
     * @param {KeywordUpsertArgs} args - Arguments to update or create a Keyword.
     * @example
     * // Update or create a Keyword
     * const keyword = await prisma.keyword.upsert({
     *   create: {
     *     // ... data to create a Keyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keyword we want to update
     *   }
     * })
     */
    upsert<T extends KeywordUpsertArgs>(args: SelectSubset<T, KeywordUpsertArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordCountArgs} args - Arguments to filter Keywords to count.
     * @example
     * // Count the number of Keywords
     * const count = await prisma.keyword.count({
     *   where: {
     *     // ... the filter for the Keywords we want to count
     *   }
     * })
    **/
    count<T extends KeywordCountArgs>(
      args?: Subset<T, KeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeywordAggregateArgs>(args: Subset<T, KeywordAggregateArgs>): Prisma.PrismaPromise<GetKeywordAggregateType<T>>

    /**
     * Group by Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordGroupByArgs} args - Group by arguments.
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
      T extends KeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeywordGroupByArgs['orderBy'] }
        : { orderBy?: KeywordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keyword model
   */
  readonly fields: KeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    website<T extends WebsiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebsiteDefaultArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Keyword model
   */
  interface KeywordFieldRefs {
    readonly id: FieldRef<"Keyword", 'Int'>
    readonly websiteId: FieldRef<"Keyword", 'Int'>
    readonly term: FieldRef<"Keyword", 'String'>
    readonly volume: FieldRef<"Keyword", 'Int'>
    readonly difficulty: FieldRef<"Keyword", 'Int'>
    readonly cpc: FieldRef<"Keyword", 'String'>
    readonly intent: FieldRef<"Keyword", 'String'>
    readonly cluster: FieldRef<"Keyword", 'String'>
    readonly status: FieldRef<"Keyword", 'String'>
    readonly createdAt: FieldRef<"Keyword", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Keyword findUnique
   */
  export type KeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findUniqueOrThrow
   */
  export type KeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findFirst
   */
  export type KeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findFirstOrThrow
   */
  export type KeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findMany
   */
  export type KeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword create
   */
  export type KeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to create a Keyword.
     */
    data: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
  }

  /**
   * Keyword createMany
   */
  export type KeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keyword createManyAndReturn
   */
  export type KeywordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Keyword update
   */
  export type KeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to update a Keyword.
     */
    data: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
    /**
     * Choose, which Keyword to update.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword updateMany
   */
  export type KeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
  }

  /**
   * Keyword updateManyAndReturn
   */
  export type KeywordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Keyword upsert
   */
  export type KeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The filter to search for the Keyword to update in case it exists.
     */
    where: KeywordWhereUniqueInput
    /**
     * In case the Keyword found by the `where` argument doesn't exist, create a new Keyword with this data.
     */
    create: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
    /**
     * In case the Keyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
  }

  /**
   * Keyword delete
   */
  export type KeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter which Keyword to delete.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword deleteMany
   */
  export type KeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keywords to delete
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to delete.
     */
    limit?: number
  }

  /**
   * Keyword without action
   */
  export type KeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
  }


  /**
   * Model Competitor
   */

  export type AggregateCompetitor = {
    _count: CompetitorCountAggregateOutputType | null
    _avg: CompetitorAvgAggregateOutputType | null
    _sum: CompetitorSumAggregateOutputType | null
    _min: CompetitorMinAggregateOutputType | null
    _max: CompetitorMaxAggregateOutputType | null
  }

  export type CompetitorAvgAggregateOutputType = {
    id: number | null
    websiteId: number | null
    dr: number | null
    keywordsCount: number | null
    backlinksCount: number | null
  }

  export type CompetitorSumAggregateOutputType = {
    id: number | null
    websiteId: number | null
    dr: number | null
    keywordsCount: number | null
    backlinksCount: number | null
  }

  export type CompetitorMinAggregateOutputType = {
    id: number | null
    websiteId: number | null
    name: string | null
    domain: string | null
    traffic: string | null
    dr: number | null
    keywordsCount: number | null
    backlinksCount: number | null
    createdAt: Date | null
  }

  export type CompetitorMaxAggregateOutputType = {
    id: number | null
    websiteId: number | null
    name: string | null
    domain: string | null
    traffic: string | null
    dr: number | null
    keywordsCount: number | null
    backlinksCount: number | null
    createdAt: Date | null
  }

  export type CompetitorCountAggregateOutputType = {
    id: number
    websiteId: number
    name: number
    domain: number
    traffic: number
    dr: number
    keywordsCount: number
    backlinksCount: number
    createdAt: number
    _all: number
  }


  export type CompetitorAvgAggregateInputType = {
    id?: true
    websiteId?: true
    dr?: true
    keywordsCount?: true
    backlinksCount?: true
  }

  export type CompetitorSumAggregateInputType = {
    id?: true
    websiteId?: true
    dr?: true
    keywordsCount?: true
    backlinksCount?: true
  }

  export type CompetitorMinAggregateInputType = {
    id?: true
    websiteId?: true
    name?: true
    domain?: true
    traffic?: true
    dr?: true
    keywordsCount?: true
    backlinksCount?: true
    createdAt?: true
  }

  export type CompetitorMaxAggregateInputType = {
    id?: true
    websiteId?: true
    name?: true
    domain?: true
    traffic?: true
    dr?: true
    keywordsCount?: true
    backlinksCount?: true
    createdAt?: true
  }

  export type CompetitorCountAggregateInputType = {
    id?: true
    websiteId?: true
    name?: true
    domain?: true
    traffic?: true
    dr?: true
    keywordsCount?: true
    backlinksCount?: true
    createdAt?: true
    _all?: true
  }

  export type CompetitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitor to aggregate.
     */
    where?: CompetitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitors to fetch.
     */
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitors
    **/
    _count?: true | CompetitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitorMaxAggregateInputType
  }

  export type GetCompetitorAggregateType<T extends CompetitorAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitor[P]>
      : GetScalarType<T[P], AggregateCompetitor[P]>
  }




  export type CompetitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitorWhereInput
    orderBy?: CompetitorOrderByWithAggregationInput | CompetitorOrderByWithAggregationInput[]
    by: CompetitorScalarFieldEnum[] | CompetitorScalarFieldEnum
    having?: CompetitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitorCountAggregateInputType | true
    _avg?: CompetitorAvgAggregateInputType
    _sum?: CompetitorSumAggregateInputType
    _min?: CompetitorMinAggregateInputType
    _max?: CompetitorMaxAggregateInputType
  }

  export type CompetitorGroupByOutputType = {
    id: number
    websiteId: number
    name: string
    domain: string
    traffic: string
    dr: number
    keywordsCount: number
    backlinksCount: number
    createdAt: Date
    _count: CompetitorCountAggregateOutputType | null
    _avg: CompetitorAvgAggregateOutputType | null
    _sum: CompetitorSumAggregateOutputType | null
    _min: CompetitorMinAggregateOutputType | null
    _max: CompetitorMaxAggregateOutputType | null
  }

  type GetCompetitorGroupByPayload<T extends CompetitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitorGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitorGroupByOutputType[P]>
        }
      >
    >


  export type CompetitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    name?: boolean
    domain?: boolean
    traffic?: boolean
    dr?: boolean
    keywordsCount?: boolean
    backlinksCount?: boolean
    createdAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitor"]>

  export type CompetitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    name?: boolean
    domain?: boolean
    traffic?: boolean
    dr?: boolean
    keywordsCount?: boolean
    backlinksCount?: boolean
    createdAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitor"]>

  export type CompetitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    name?: boolean
    domain?: boolean
    traffic?: boolean
    dr?: boolean
    keywordsCount?: boolean
    backlinksCount?: boolean
    createdAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitor"]>

  export type CompetitorSelectScalar = {
    id?: boolean
    websiteId?: boolean
    name?: boolean
    domain?: boolean
    traffic?: boolean
    dr?: boolean
    keywordsCount?: boolean
    backlinksCount?: boolean
    createdAt?: boolean
  }

  export type CompetitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "websiteId" | "name" | "domain" | "traffic" | "dr" | "keywordsCount" | "backlinksCount" | "createdAt", ExtArgs["result"]["competitor"]>
  export type CompetitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type CompetitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type CompetitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }

  export type $CompetitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competitor"
    objects: {
      website: Prisma.$WebsitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      websiteId: number
      name: string
      domain: string
      traffic: string
      dr: number
      keywordsCount: number
      backlinksCount: number
      createdAt: Date
    }, ExtArgs["result"]["competitor"]>
    composites: {}
  }

  type CompetitorGetPayload<S extends boolean | null | undefined | CompetitorDefaultArgs> = $Result.GetResult<Prisma.$CompetitorPayload, S>

  type CompetitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitorCountAggregateInputType | true
    }

  export interface CompetitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competitor'], meta: { name: 'Competitor' } }
    /**
     * Find zero or one Competitor that matches the filter.
     * @param {CompetitorFindUniqueArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitorFindUniqueArgs>(args: SelectSubset<T, CompetitorFindUniqueArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitorFindUniqueOrThrowArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitorFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorFindFirstArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitorFindFirstArgs>(args?: SelectSubset<T, CompetitorFindFirstArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorFindFirstOrThrowArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitorFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitors
     * const competitors = await prisma.competitor.findMany()
     * 
     * // Get first 10 Competitors
     * const competitors = await prisma.competitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitorWithIdOnly = await prisma.competitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitorFindManyArgs>(args?: SelectSubset<T, CompetitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competitor.
     * @param {CompetitorCreateArgs} args - Arguments to create a Competitor.
     * @example
     * // Create one Competitor
     * const Competitor = await prisma.competitor.create({
     *   data: {
     *     // ... data to create a Competitor
     *   }
     * })
     * 
     */
    create<T extends CompetitorCreateArgs>(args: SelectSubset<T, CompetitorCreateArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competitors.
     * @param {CompetitorCreateManyArgs} args - Arguments to create many Competitors.
     * @example
     * // Create many Competitors
     * const competitor = await prisma.competitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitorCreateManyArgs>(args?: SelectSubset<T, CompetitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competitors and returns the data saved in the database.
     * @param {CompetitorCreateManyAndReturnArgs} args - Arguments to create many Competitors.
     * @example
     * // Create many Competitors
     * const competitor = await prisma.competitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competitors and only return the `id`
     * const competitorWithIdOnly = await prisma.competitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitorCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competitor.
     * @param {CompetitorDeleteArgs} args - Arguments to delete one Competitor.
     * @example
     * // Delete one Competitor
     * const Competitor = await prisma.competitor.delete({
     *   where: {
     *     // ... filter to delete one Competitor
     *   }
     * })
     * 
     */
    delete<T extends CompetitorDeleteArgs>(args: SelectSubset<T, CompetitorDeleteArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competitor.
     * @param {CompetitorUpdateArgs} args - Arguments to update one Competitor.
     * @example
     * // Update one Competitor
     * const competitor = await prisma.competitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitorUpdateArgs>(args: SelectSubset<T, CompetitorUpdateArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competitors.
     * @param {CompetitorDeleteManyArgs} args - Arguments to filter Competitors to delete.
     * @example
     * // Delete a few Competitors
     * const { count } = await prisma.competitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitorDeleteManyArgs>(args?: SelectSubset<T, CompetitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitors
     * const competitor = await prisma.competitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitorUpdateManyArgs>(args: SelectSubset<T, CompetitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitors and returns the data updated in the database.
     * @param {CompetitorUpdateManyAndReturnArgs} args - Arguments to update many Competitors.
     * @example
     * // Update many Competitors
     * const competitor = await prisma.competitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competitors and only return the `id`
     * const competitorWithIdOnly = await prisma.competitor.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CompetitorUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competitor.
     * @param {CompetitorUpsertArgs} args - Arguments to update or create a Competitor.
     * @example
     * // Update or create a Competitor
     * const competitor = await prisma.competitor.upsert({
     *   create: {
     *     // ... data to create a Competitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competitor we want to update
     *   }
     * })
     */
    upsert<T extends CompetitorUpsertArgs>(args: SelectSubset<T, CompetitorUpsertArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorCountArgs} args - Arguments to filter Competitors to count.
     * @example
     * // Count the number of Competitors
     * const count = await prisma.competitor.count({
     *   where: {
     *     // ... the filter for the Competitors we want to count
     *   }
     * })
    **/
    count<T extends CompetitorCountArgs>(
      args?: Subset<T, CompetitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitorAggregateArgs>(args: Subset<T, CompetitorAggregateArgs>): Prisma.PrismaPromise<GetCompetitorAggregateType<T>>

    /**
     * Group by Competitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorGroupByArgs} args - Group by arguments.
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
      T extends CompetitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitorGroupByArgs['orderBy'] }
        : { orderBy?: CompetitorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competitor model
   */
  readonly fields: CompetitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    website<T extends WebsiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebsiteDefaultArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Competitor model
   */
  interface CompetitorFieldRefs {
    readonly id: FieldRef<"Competitor", 'Int'>
    readonly websiteId: FieldRef<"Competitor", 'Int'>
    readonly name: FieldRef<"Competitor", 'String'>
    readonly domain: FieldRef<"Competitor", 'String'>
    readonly traffic: FieldRef<"Competitor", 'String'>
    readonly dr: FieldRef<"Competitor", 'Int'>
    readonly keywordsCount: FieldRef<"Competitor", 'Int'>
    readonly backlinksCount: FieldRef<"Competitor", 'Int'>
    readonly createdAt: FieldRef<"Competitor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Competitor findUnique
   */
  export type CompetitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitor to fetch.
     */
    where: CompetitorWhereUniqueInput
  }

  /**
   * Competitor findUniqueOrThrow
   */
  export type CompetitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitor to fetch.
     */
    where: CompetitorWhereUniqueInput
  }

  /**
   * Competitor findFirst
   */
  export type CompetitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitor to fetch.
     */
    where?: CompetitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitors to fetch.
     */
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitors.
     */
    cursor?: CompetitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitors.
     */
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[]
  }

  /**
   * Competitor findFirstOrThrow
   */
  export type CompetitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitor to fetch.
     */
    where?: CompetitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitors to fetch.
     */
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitors.
     */
    cursor?: CompetitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitors.
     */
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[]
  }

  /**
   * Competitor findMany
   */
  export type CompetitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitors to fetch.
     */
    where?: CompetitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitors to fetch.
     */
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitors.
     */
    cursor?: CompetitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitors.
     */
    skip?: number
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[]
  }

  /**
   * Competitor create
   */
  export type CompetitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Competitor.
     */
    data: XOR<CompetitorCreateInput, CompetitorUncheckedCreateInput>
  }

  /**
   * Competitor createMany
   */
  export type CompetitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competitors.
     */
    data: CompetitorCreateManyInput | CompetitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competitor createManyAndReturn
   */
  export type CompetitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * The data used to create many Competitors.
     */
    data: CompetitorCreateManyInput | CompetitorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Competitor update
   */
  export type CompetitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Competitor.
     */
    data: XOR<CompetitorUpdateInput, CompetitorUncheckedUpdateInput>
    /**
     * Choose, which Competitor to update.
     */
    where: CompetitorWhereUniqueInput
  }

  /**
   * Competitor updateMany
   */
  export type CompetitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competitors.
     */
    data: XOR<CompetitorUpdateManyMutationInput, CompetitorUncheckedUpdateManyInput>
    /**
     * Filter which Competitors to update
     */
    where?: CompetitorWhereInput
    /**
     * Limit how many Competitors to update.
     */
    limit?: number
  }

  /**
   * Competitor updateManyAndReturn
   */
  export type CompetitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * The data used to update Competitors.
     */
    data: XOR<CompetitorUpdateManyMutationInput, CompetitorUncheckedUpdateManyInput>
    /**
     * Filter which Competitors to update
     */
    where?: CompetitorWhereInput
    /**
     * Limit how many Competitors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Competitor upsert
   */
  export type CompetitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Competitor to update in case it exists.
     */
    where: CompetitorWhereUniqueInput
    /**
     * In case the Competitor found by the `where` argument doesn't exist, create a new Competitor with this data.
     */
    create: XOR<CompetitorCreateInput, CompetitorUncheckedCreateInput>
    /**
     * In case the Competitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitorUpdateInput, CompetitorUncheckedUpdateInput>
  }

  /**
   * Competitor delete
   */
  export type CompetitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter which Competitor to delete.
     */
    where: CompetitorWhereUniqueInput
  }

  /**
   * Competitor deleteMany
   */
  export type CompetitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitors to delete
     */
    where?: CompetitorWhereInput
    /**
     * Limit how many Competitors to delete.
     */
    limit?: number
  }

  /**
   * Competitor without action
   */
  export type CompetitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostAvgAggregateOutputType = {
    id: number | null
    websiteId: number | null
    wordCount: number | null
    wpPostId: number | null
  }

  export type BlogPostSumAggregateOutputType = {
    id: number | null
    websiteId: number | null
    wordCount: number | null
    wpPostId: number | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: number | null
    websiteId: number | null
    title: string | null
    slug: string | null
    targetKeyword: string | null
    wordCount: number | null
    content: string | null
    metaTitle: string | null
    metaDescription: string | null
    schemaJson: string | null
    status: string | null
    wpPostId: number | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: number | null
    websiteId: number | null
    title: string | null
    slug: string | null
    targetKeyword: string | null
    wordCount: number | null
    content: string | null
    metaTitle: string | null
    metaDescription: string | null
    schemaJson: string | null
    status: string | null
    wpPostId: number | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    websiteId: number
    title: number
    slug: number
    targetKeyword: number
    wordCount: number
    content: number
    metaTitle: number
    metaDescription: number
    schemaJson: number
    status: number
    wpPostId: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogPostAvgAggregateInputType = {
    id?: true
    websiteId?: true
    wordCount?: true
    wpPostId?: true
  }

  export type BlogPostSumAggregateInputType = {
    id?: true
    websiteId?: true
    wordCount?: true
    wpPostId?: true
  }

  export type BlogPostMinAggregateInputType = {
    id?: true
    websiteId?: true
    title?: true
    slug?: true
    targetKeyword?: true
    wordCount?: true
    content?: true
    metaTitle?: true
    metaDescription?: true
    schemaJson?: true
    status?: true
    wpPostId?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    websiteId?: true
    title?: true
    slug?: true
    targetKeyword?: true
    wordCount?: true
    content?: true
    metaTitle?: true
    metaDescription?: true
    schemaJson?: true
    status?: true
    wpPostId?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    websiteId?: true
    title?: true
    slug?: true
    targetKeyword?: true
    wordCount?: true
    content?: true
    metaTitle?: true
    metaDescription?: true
    schemaJson?: true
    status?: true
    wpPostId?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _avg?: BlogPostAvgAggregateInputType
    _sum?: BlogPostSumAggregateInputType
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: number
    websiteId: number
    title: string
    slug: string
    targetKeyword: string
    wordCount: number
    content: string
    metaTitle: string | null
    metaDescription: string | null
    schemaJson: string | null
    status: string
    wpPostId: number | null
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    title?: boolean
    slug?: boolean
    targetKeyword?: boolean
    wordCount?: boolean
    content?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    schemaJson?: boolean
    status?: boolean
    wpPostId?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    title?: boolean
    slug?: boolean
    targetKeyword?: boolean
    wordCount?: boolean
    content?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    schemaJson?: boolean
    status?: boolean
    wpPostId?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    title?: boolean
    slug?: boolean
    targetKeyword?: boolean
    wordCount?: boolean
    content?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    schemaJson?: boolean
    status?: boolean
    wpPostId?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    websiteId?: boolean
    title?: boolean
    slug?: boolean
    targetKeyword?: boolean
    wordCount?: boolean
    content?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    schemaJson?: boolean
    status?: boolean
    wpPostId?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "websiteId" | "title" | "slug" | "targetKeyword" | "wordCount" | "content" | "metaTitle" | "metaDescription" | "schemaJson" | "status" | "wpPostId" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["blogPost"]>
  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      website: Prisma.$WebsitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      websiteId: number
      title: string
      slug: string
      targetKeyword: string
      wordCount: number
      content: string
      metaTitle: string | null
      metaDescription: string | null
      schemaJson: string | null
      status: string
      wpPostId: number | null
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
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
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    website<T extends WebsiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebsiteDefaultArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'Int'>
    readonly websiteId: FieldRef<"BlogPost", 'Int'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly targetKeyword: FieldRef<"BlogPost", 'String'>
    readonly wordCount: FieldRef<"BlogPost", 'Int'>
    readonly content: FieldRef<"BlogPost", 'String'>
    readonly metaTitle: FieldRef<"BlogPost", 'String'>
    readonly metaDescription: FieldRef<"BlogPost", 'String'>
    readonly schemaJson: FieldRef<"BlogPost", 'String'>
    readonly status: FieldRef<"BlogPost", 'String'>
    readonly wpPostId: FieldRef<"BlogPost", 'Int'>
    readonly publishedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model AnalyticsReport
   */

  export type AggregateAnalyticsReport = {
    _count: AnalyticsReportCountAggregateOutputType | null
    _avg: AnalyticsReportAvgAggregateOutputType | null
    _sum: AnalyticsReportSumAggregateOutputType | null
    _min: AnalyticsReportMinAggregateOutputType | null
    _max: AnalyticsReportMaxAggregateOutputType | null
  }

  export type AnalyticsReportAvgAggregateOutputType = {
    id: number | null
    websiteId: number | null
    totalClicks: number | null
    impressions: number | null
    ctr: number | null
    avgPosition: number | null
  }

  export type AnalyticsReportSumAggregateOutputType = {
    id: number | null
    websiteId: number | null
    totalClicks: number | null
    impressions: number | null
    ctr: number | null
    avgPosition: number | null
  }

  export type AnalyticsReportMinAggregateOutputType = {
    id: number | null
    websiteId: number | null
    totalClicks: number | null
    impressions: number | null
    ctr: number | null
    avgPosition: number | null
    createdAt: Date | null
  }

  export type AnalyticsReportMaxAggregateOutputType = {
    id: number | null
    websiteId: number | null
    totalClicks: number | null
    impressions: number | null
    ctr: number | null
    avgPosition: number | null
    createdAt: Date | null
  }

  export type AnalyticsReportCountAggregateOutputType = {
    id: number
    websiteId: number
    totalClicks: number
    impressions: number
    ctr: number
    avgPosition: number
    createdAt: number
    _all: number
  }


  export type AnalyticsReportAvgAggregateInputType = {
    id?: true
    websiteId?: true
    totalClicks?: true
    impressions?: true
    ctr?: true
    avgPosition?: true
  }

  export type AnalyticsReportSumAggregateInputType = {
    id?: true
    websiteId?: true
    totalClicks?: true
    impressions?: true
    ctr?: true
    avgPosition?: true
  }

  export type AnalyticsReportMinAggregateInputType = {
    id?: true
    websiteId?: true
    totalClicks?: true
    impressions?: true
    ctr?: true
    avgPosition?: true
    createdAt?: true
  }

  export type AnalyticsReportMaxAggregateInputType = {
    id?: true
    websiteId?: true
    totalClicks?: true
    impressions?: true
    ctr?: true
    avgPosition?: true
    createdAt?: true
  }

  export type AnalyticsReportCountAggregateInputType = {
    id?: true
    websiteId?: true
    totalClicks?: true
    impressions?: true
    ctr?: true
    avgPosition?: true
    createdAt?: true
    _all?: true
  }

  export type AnalyticsReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsReport to aggregate.
     */
    where?: AnalyticsReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsReports to fetch.
     */
    orderBy?: AnalyticsReportOrderByWithRelationInput | AnalyticsReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyticsReports
    **/
    _count?: true | AnalyticsReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsReportMaxAggregateInputType
  }

  export type GetAnalyticsReportAggregateType<T extends AnalyticsReportAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyticsReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyticsReport[P]>
      : GetScalarType<T[P], AggregateAnalyticsReport[P]>
  }




  export type AnalyticsReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsReportWhereInput
    orderBy?: AnalyticsReportOrderByWithAggregationInput | AnalyticsReportOrderByWithAggregationInput[]
    by: AnalyticsReportScalarFieldEnum[] | AnalyticsReportScalarFieldEnum
    having?: AnalyticsReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsReportCountAggregateInputType | true
    _avg?: AnalyticsReportAvgAggregateInputType
    _sum?: AnalyticsReportSumAggregateInputType
    _min?: AnalyticsReportMinAggregateInputType
    _max?: AnalyticsReportMaxAggregateInputType
  }

  export type AnalyticsReportGroupByOutputType = {
    id: number
    websiteId: number
    totalClicks: number
    impressions: number
    ctr: number
    avgPosition: number
    createdAt: Date
    _count: AnalyticsReportCountAggregateOutputType | null
    _avg: AnalyticsReportAvgAggregateOutputType | null
    _sum: AnalyticsReportSumAggregateOutputType | null
    _min: AnalyticsReportMinAggregateOutputType | null
    _max: AnalyticsReportMaxAggregateOutputType | null
  }

  type GetAnalyticsReportGroupByPayload<T extends AnalyticsReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsReportGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsReportGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    totalClicks?: boolean
    impressions?: boolean
    ctr?: boolean
    avgPosition?: boolean
    createdAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analyticsReport"]>

  export type AnalyticsReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    totalClicks?: boolean
    impressions?: boolean
    ctr?: boolean
    avgPosition?: boolean
    createdAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analyticsReport"]>

  export type AnalyticsReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteId?: boolean
    totalClicks?: boolean
    impressions?: boolean
    ctr?: boolean
    avgPosition?: boolean
    createdAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analyticsReport"]>

  export type AnalyticsReportSelectScalar = {
    id?: boolean
    websiteId?: boolean
    totalClicks?: boolean
    impressions?: boolean
    ctr?: boolean
    avgPosition?: boolean
    createdAt?: boolean
  }

  export type AnalyticsReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "websiteId" | "totalClicks" | "impressions" | "ctr" | "avgPosition" | "createdAt", ExtArgs["result"]["analyticsReport"]>
  export type AnalyticsReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type AnalyticsReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type AnalyticsReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }

  export type $AnalyticsReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyticsReport"
    objects: {
      website: Prisma.$WebsitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      websiteId: number
      totalClicks: number
      impressions: number
      ctr: number
      avgPosition: number
      createdAt: Date
    }, ExtArgs["result"]["analyticsReport"]>
    composites: {}
  }

  type AnalyticsReportGetPayload<S extends boolean | null | undefined | AnalyticsReportDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsReportPayload, S>

  type AnalyticsReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsReportCountAggregateInputType | true
    }

  export interface AnalyticsReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsReport'], meta: { name: 'AnalyticsReport' } }
    /**
     * Find zero or one AnalyticsReport that matches the filter.
     * @param {AnalyticsReportFindUniqueArgs} args - Arguments to find a AnalyticsReport
     * @example
     * // Get one AnalyticsReport
     * const analyticsReport = await prisma.analyticsReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsReportFindUniqueArgs>(args: SelectSubset<T, AnalyticsReportFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsReportClient<$Result.GetResult<Prisma.$AnalyticsReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalyticsReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsReportFindUniqueOrThrowArgs} args - Arguments to find a AnalyticsReport
     * @example
     * // Get one AnalyticsReport
     * const analyticsReport = await prisma.analyticsReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsReportFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsReportClient<$Result.GetResult<Prisma.$AnalyticsReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsReportFindFirstArgs} args - Arguments to find a AnalyticsReport
     * @example
     * // Get one AnalyticsReport
     * const analyticsReport = await prisma.analyticsReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsReportFindFirstArgs>(args?: SelectSubset<T, AnalyticsReportFindFirstArgs<ExtArgs>>): Prisma__AnalyticsReportClient<$Result.GetResult<Prisma.$AnalyticsReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsReportFindFirstOrThrowArgs} args - Arguments to find a AnalyticsReport
     * @example
     * // Get one AnalyticsReport
     * const analyticsReport = await prisma.analyticsReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsReportFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsReportClient<$Result.GetResult<Prisma.$AnalyticsReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalyticsReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyticsReports
     * const analyticsReports = await prisma.analyticsReport.findMany()
     * 
     * // Get first 10 AnalyticsReports
     * const analyticsReports = await prisma.analyticsReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsReportWithIdOnly = await prisma.analyticsReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsReportFindManyArgs>(args?: SelectSubset<T, AnalyticsReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalyticsReport.
     * @param {AnalyticsReportCreateArgs} args - Arguments to create a AnalyticsReport.
     * @example
     * // Create one AnalyticsReport
     * const AnalyticsReport = await prisma.analyticsReport.create({
     *   data: {
     *     // ... data to create a AnalyticsReport
     *   }
     * })
     * 
     */
    create<T extends AnalyticsReportCreateArgs>(args: SelectSubset<T, AnalyticsReportCreateArgs<ExtArgs>>): Prisma__AnalyticsReportClient<$Result.GetResult<Prisma.$AnalyticsReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalyticsReports.
     * @param {AnalyticsReportCreateManyArgs} args - Arguments to create many AnalyticsReports.
     * @example
     * // Create many AnalyticsReports
     * const analyticsReport = await prisma.analyticsReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsReportCreateManyArgs>(args?: SelectSubset<T, AnalyticsReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalyticsReports and returns the data saved in the database.
     * @param {AnalyticsReportCreateManyAndReturnArgs} args - Arguments to create many AnalyticsReports.
     * @example
     * // Create many AnalyticsReports
     * const analyticsReport = await prisma.analyticsReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalyticsReports and only return the `id`
     * const analyticsReportWithIdOnly = await prisma.analyticsReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsReportCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalyticsReport.
     * @param {AnalyticsReportDeleteArgs} args - Arguments to delete one AnalyticsReport.
     * @example
     * // Delete one AnalyticsReport
     * const AnalyticsReport = await prisma.analyticsReport.delete({
     *   where: {
     *     // ... filter to delete one AnalyticsReport
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsReportDeleteArgs>(args: SelectSubset<T, AnalyticsReportDeleteArgs<ExtArgs>>): Prisma__AnalyticsReportClient<$Result.GetResult<Prisma.$AnalyticsReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalyticsReport.
     * @param {AnalyticsReportUpdateArgs} args - Arguments to update one AnalyticsReport.
     * @example
     * // Update one AnalyticsReport
     * const analyticsReport = await prisma.analyticsReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsReportUpdateArgs>(args: SelectSubset<T, AnalyticsReportUpdateArgs<ExtArgs>>): Prisma__AnalyticsReportClient<$Result.GetResult<Prisma.$AnalyticsReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalyticsReports.
     * @param {AnalyticsReportDeleteManyArgs} args - Arguments to filter AnalyticsReports to delete.
     * @example
     * // Delete a few AnalyticsReports
     * const { count } = await prisma.analyticsReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsReportDeleteManyArgs>(args?: SelectSubset<T, AnalyticsReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyticsReports
     * const analyticsReport = await prisma.analyticsReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsReportUpdateManyArgs>(args: SelectSubset<T, AnalyticsReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsReports and returns the data updated in the database.
     * @param {AnalyticsReportUpdateManyAndReturnArgs} args - Arguments to update many AnalyticsReports.
     * @example
     * // Update many AnalyticsReports
     * const analyticsReport = await prisma.analyticsReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalyticsReports and only return the `id`
     * const analyticsReportWithIdOnly = await prisma.analyticsReport.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AnalyticsReportUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalyticsReport.
     * @param {AnalyticsReportUpsertArgs} args - Arguments to update or create a AnalyticsReport.
     * @example
     * // Update or create a AnalyticsReport
     * const analyticsReport = await prisma.analyticsReport.upsert({
     *   create: {
     *     // ... data to create a AnalyticsReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyticsReport we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsReportUpsertArgs>(args: SelectSubset<T, AnalyticsReportUpsertArgs<ExtArgs>>): Prisma__AnalyticsReportClient<$Result.GetResult<Prisma.$AnalyticsReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalyticsReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsReportCountArgs} args - Arguments to filter AnalyticsReports to count.
     * @example
     * // Count the number of AnalyticsReports
     * const count = await prisma.analyticsReport.count({
     *   where: {
     *     // ... the filter for the AnalyticsReports we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsReportCountArgs>(
      args?: Subset<T, AnalyticsReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyticsReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsReportAggregateArgs>(args: Subset<T, AnalyticsReportAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsReportAggregateType<T>>

    /**
     * Group by AnalyticsReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsReportGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsReportGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyticsReport model
   */
  readonly fields: AnalyticsReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyticsReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    website<T extends WebsiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebsiteDefaultArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnalyticsReport model
   */
  interface AnalyticsReportFieldRefs {
    readonly id: FieldRef<"AnalyticsReport", 'Int'>
    readonly websiteId: FieldRef<"AnalyticsReport", 'Int'>
    readonly totalClicks: FieldRef<"AnalyticsReport", 'Int'>
    readonly impressions: FieldRef<"AnalyticsReport", 'Int'>
    readonly ctr: FieldRef<"AnalyticsReport", 'Float'>
    readonly avgPosition: FieldRef<"AnalyticsReport", 'Float'>
    readonly createdAt: FieldRef<"AnalyticsReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalyticsReport findUnique
   */
  export type AnalyticsReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsReport to fetch.
     */
    where: AnalyticsReportWhereUniqueInput
  }

  /**
   * AnalyticsReport findUniqueOrThrow
   */
  export type AnalyticsReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsReport to fetch.
     */
    where: AnalyticsReportWhereUniqueInput
  }

  /**
   * AnalyticsReport findFirst
   */
  export type AnalyticsReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsReport to fetch.
     */
    where?: AnalyticsReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsReports to fetch.
     */
    orderBy?: AnalyticsReportOrderByWithRelationInput | AnalyticsReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsReports.
     */
    cursor?: AnalyticsReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsReports.
     */
    distinct?: AnalyticsReportScalarFieldEnum | AnalyticsReportScalarFieldEnum[]
  }

  /**
   * AnalyticsReport findFirstOrThrow
   */
  export type AnalyticsReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsReport to fetch.
     */
    where?: AnalyticsReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsReports to fetch.
     */
    orderBy?: AnalyticsReportOrderByWithRelationInput | AnalyticsReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsReports.
     */
    cursor?: AnalyticsReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsReports.
     */
    distinct?: AnalyticsReportScalarFieldEnum | AnalyticsReportScalarFieldEnum[]
  }

  /**
   * AnalyticsReport findMany
   */
  export type AnalyticsReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsReports to fetch.
     */
    where?: AnalyticsReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsReports to fetch.
     */
    orderBy?: AnalyticsReportOrderByWithRelationInput | AnalyticsReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyticsReports.
     */
    cursor?: AnalyticsReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsReports.
     */
    skip?: number
    distinct?: AnalyticsReportScalarFieldEnum | AnalyticsReportScalarFieldEnum[]
  }

  /**
   * AnalyticsReport create
   */
  export type AnalyticsReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalyticsReport.
     */
    data: XOR<AnalyticsReportCreateInput, AnalyticsReportUncheckedCreateInput>
  }

  /**
   * AnalyticsReport createMany
   */
  export type AnalyticsReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyticsReports.
     */
    data: AnalyticsReportCreateManyInput | AnalyticsReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsReport createManyAndReturn
   */
  export type AnalyticsReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * The data used to create many AnalyticsReports.
     */
    data: AnalyticsReportCreateManyInput | AnalyticsReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalyticsReport update
   */
  export type AnalyticsReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalyticsReport.
     */
    data: XOR<AnalyticsReportUpdateInput, AnalyticsReportUncheckedUpdateInput>
    /**
     * Choose, which AnalyticsReport to update.
     */
    where: AnalyticsReportWhereUniqueInput
  }

  /**
   * AnalyticsReport updateMany
   */
  export type AnalyticsReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyticsReports.
     */
    data: XOR<AnalyticsReportUpdateManyMutationInput, AnalyticsReportUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsReports to update
     */
    where?: AnalyticsReportWhereInput
    /**
     * Limit how many AnalyticsReports to update.
     */
    limit?: number
  }

  /**
   * AnalyticsReport updateManyAndReturn
   */
  export type AnalyticsReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * The data used to update AnalyticsReports.
     */
    data: XOR<AnalyticsReportUpdateManyMutationInput, AnalyticsReportUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsReports to update
     */
    where?: AnalyticsReportWhereInput
    /**
     * Limit how many AnalyticsReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalyticsReport upsert
   */
  export type AnalyticsReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalyticsReport to update in case it exists.
     */
    where: AnalyticsReportWhereUniqueInput
    /**
     * In case the AnalyticsReport found by the `where` argument doesn't exist, create a new AnalyticsReport with this data.
     */
    create: XOR<AnalyticsReportCreateInput, AnalyticsReportUncheckedCreateInput>
    /**
     * In case the AnalyticsReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsReportUpdateInput, AnalyticsReportUncheckedUpdateInput>
  }

  /**
   * AnalyticsReport delete
   */
  export type AnalyticsReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportInclude<ExtArgs> | null
    /**
     * Filter which AnalyticsReport to delete.
     */
    where: AnalyticsReportWhereUniqueInput
  }

  /**
   * AnalyticsReport deleteMany
   */
  export type AnalyticsReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsReports to delete
     */
    where?: AnalyticsReportWhereInput
    /**
     * Limit how many AnalyticsReports to delete.
     */
    limit?: number
  }

  /**
   * AnalyticsReport without action
   */
  export type AnalyticsReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsReport
     */
    select?: AnalyticsReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsReport
     */
    omit?: AnalyticsReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WebsiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    country: 'country',
    industry: 'industry',
    language: 'language',
    status: 'status',
    seoScore: 'seoScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebsiteScalarFieldEnum = (typeof WebsiteScalarFieldEnum)[keyof typeof WebsiteScalarFieldEnum]


  export const SeoAuditScalarFieldEnum: {
    id: 'id',
    websiteId: 'websiteId',
    healthScore: 'healthScore',
    criticalCount: 'criticalCount',
    warningCount: 'warningCount',
    noticeCount: 'noticeCount',
    pagesCrawled: 'pagesCrawled',
    issues: 'issues',
    createdAt: 'createdAt'
  };

  export type SeoAuditScalarFieldEnum = (typeof SeoAuditScalarFieldEnum)[keyof typeof SeoAuditScalarFieldEnum]


  export const KeywordScalarFieldEnum: {
    id: 'id',
    websiteId: 'websiteId',
    term: 'term',
    volume: 'volume',
    difficulty: 'difficulty',
    cpc: 'cpc',
    intent: 'intent',
    cluster: 'cluster',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type KeywordScalarFieldEnum = (typeof KeywordScalarFieldEnum)[keyof typeof KeywordScalarFieldEnum]


  export const CompetitorScalarFieldEnum: {
    id: 'id',
    websiteId: 'websiteId',
    name: 'name',
    domain: 'domain',
    traffic: 'traffic',
    dr: 'dr',
    keywordsCount: 'keywordsCount',
    backlinksCount: 'backlinksCount',
    createdAt: 'createdAt'
  };

  export type CompetitorScalarFieldEnum = (typeof CompetitorScalarFieldEnum)[keyof typeof CompetitorScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    websiteId: 'websiteId',
    title: 'title',
    slug: 'slug',
    targetKeyword: 'targetKeyword',
    wordCount: 'wordCount',
    content: 'content',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    schemaJson: 'schemaJson',
    status: 'status',
    wpPostId: 'wpPostId',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const AnalyticsReportScalarFieldEnum: {
    id: 'id',
    websiteId: 'websiteId',
    totalClicks: 'totalClicks',
    impressions: 'impressions',
    ctr: 'ctr',
    avgPosition: 'avgPosition',
    createdAt: 'createdAt'
  };

  export type AnalyticsReportScalarFieldEnum = (typeof AnalyticsReportScalarFieldEnum)[keyof typeof AnalyticsReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WebsiteWhereInput = {
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    id?: IntFilter<"Website"> | number
    name?: StringFilter<"Website"> | string
    domain?: StringFilter<"Website"> | string
    country?: StringNullableFilter<"Website"> | string | null
    industry?: StringNullableFilter<"Website"> | string | null
    language?: StringNullableFilter<"Website"> | string | null
    status?: StringFilter<"Website"> | string
    seoScore?: IntFilter<"Website"> | number
    createdAt?: DateTimeFilter<"Website"> | Date | string
    updatedAt?: DateTimeFilter<"Website"> | Date | string
    audits?: SeoAuditListRelationFilter
    keywords?: KeywordListRelationFilter
    blogs?: BlogPostListRelationFilter
    competitors?: CompetitorListRelationFilter
    reports?: AnalyticsReportListRelationFilter
  }

  export type WebsiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    country?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    status?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    audits?: SeoAuditOrderByRelationAggregateInput
    keywords?: KeywordOrderByRelationAggregateInput
    blogs?: BlogPostOrderByRelationAggregateInput
    competitors?: CompetitorOrderByRelationAggregateInput
    reports?: AnalyticsReportOrderByRelationAggregateInput
  }

  export type WebsiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    domain?: string
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    name?: StringFilter<"Website"> | string
    country?: StringNullableFilter<"Website"> | string | null
    industry?: StringNullableFilter<"Website"> | string | null
    language?: StringNullableFilter<"Website"> | string | null
    status?: StringFilter<"Website"> | string
    seoScore?: IntFilter<"Website"> | number
    createdAt?: DateTimeFilter<"Website"> | Date | string
    updatedAt?: DateTimeFilter<"Website"> | Date | string
    audits?: SeoAuditListRelationFilter
    keywords?: KeywordListRelationFilter
    blogs?: BlogPostListRelationFilter
    competitors?: CompetitorListRelationFilter
    reports?: AnalyticsReportListRelationFilter
  }, "id" | "domain">

  export type WebsiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    country?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    status?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebsiteCountOrderByAggregateInput
    _avg?: WebsiteAvgOrderByAggregateInput
    _max?: WebsiteMaxOrderByAggregateInput
    _min?: WebsiteMinOrderByAggregateInput
    _sum?: WebsiteSumOrderByAggregateInput
  }

  export type WebsiteScalarWhereWithAggregatesInput = {
    AND?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    OR?: WebsiteScalarWhereWithAggregatesInput[]
    NOT?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Website"> | number
    name?: StringWithAggregatesFilter<"Website"> | string
    domain?: StringWithAggregatesFilter<"Website"> | string
    country?: StringNullableWithAggregatesFilter<"Website"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Website"> | string | null
    language?: StringNullableWithAggregatesFilter<"Website"> | string | null
    status?: StringWithAggregatesFilter<"Website"> | string
    seoScore?: IntWithAggregatesFilter<"Website"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Website"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Website"> | Date | string
  }

  export type SeoAuditWhereInput = {
    AND?: SeoAuditWhereInput | SeoAuditWhereInput[]
    OR?: SeoAuditWhereInput[]
    NOT?: SeoAuditWhereInput | SeoAuditWhereInput[]
    id?: IntFilter<"SeoAudit"> | number
    websiteId?: IntFilter<"SeoAudit"> | number
    healthScore?: IntFilter<"SeoAudit"> | number
    criticalCount?: IntFilter<"SeoAudit"> | number
    warningCount?: IntFilter<"SeoAudit"> | number
    noticeCount?: IntFilter<"SeoAudit"> | number
    pagesCrawled?: IntFilter<"SeoAudit"> | number
    issues?: JsonFilter<"SeoAudit">
    createdAt?: DateTimeFilter<"SeoAudit"> | Date | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }

  export type SeoAuditOrderByWithRelationInput = {
    id?: SortOrder
    websiteId?: SortOrder
    healthScore?: SortOrder
    criticalCount?: SortOrder
    warningCount?: SortOrder
    noticeCount?: SortOrder
    pagesCrawled?: SortOrder
    issues?: SortOrder
    createdAt?: SortOrder
    website?: WebsiteOrderByWithRelationInput
  }

  export type SeoAuditWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeoAuditWhereInput | SeoAuditWhereInput[]
    OR?: SeoAuditWhereInput[]
    NOT?: SeoAuditWhereInput | SeoAuditWhereInput[]
    websiteId?: IntFilter<"SeoAudit"> | number
    healthScore?: IntFilter<"SeoAudit"> | number
    criticalCount?: IntFilter<"SeoAudit"> | number
    warningCount?: IntFilter<"SeoAudit"> | number
    noticeCount?: IntFilter<"SeoAudit"> | number
    pagesCrawled?: IntFilter<"SeoAudit"> | number
    issues?: JsonFilter<"SeoAudit">
    createdAt?: DateTimeFilter<"SeoAudit"> | Date | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }, "id">

  export type SeoAuditOrderByWithAggregationInput = {
    id?: SortOrder
    websiteId?: SortOrder
    healthScore?: SortOrder
    criticalCount?: SortOrder
    warningCount?: SortOrder
    noticeCount?: SortOrder
    pagesCrawled?: SortOrder
    issues?: SortOrder
    createdAt?: SortOrder
    _count?: SeoAuditCountOrderByAggregateInput
    _avg?: SeoAuditAvgOrderByAggregateInput
    _max?: SeoAuditMaxOrderByAggregateInput
    _min?: SeoAuditMinOrderByAggregateInput
    _sum?: SeoAuditSumOrderByAggregateInput
  }

  export type SeoAuditScalarWhereWithAggregatesInput = {
    AND?: SeoAuditScalarWhereWithAggregatesInput | SeoAuditScalarWhereWithAggregatesInput[]
    OR?: SeoAuditScalarWhereWithAggregatesInput[]
    NOT?: SeoAuditScalarWhereWithAggregatesInput | SeoAuditScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SeoAudit"> | number
    websiteId?: IntWithAggregatesFilter<"SeoAudit"> | number
    healthScore?: IntWithAggregatesFilter<"SeoAudit"> | number
    criticalCount?: IntWithAggregatesFilter<"SeoAudit"> | number
    warningCount?: IntWithAggregatesFilter<"SeoAudit"> | number
    noticeCount?: IntWithAggregatesFilter<"SeoAudit"> | number
    pagesCrawled?: IntWithAggregatesFilter<"SeoAudit"> | number
    issues?: JsonWithAggregatesFilter<"SeoAudit">
    createdAt?: DateTimeWithAggregatesFilter<"SeoAudit"> | Date | string
  }

  export type KeywordWhereInput = {
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    id?: IntFilter<"Keyword"> | number
    websiteId?: IntFilter<"Keyword"> | number
    term?: StringFilter<"Keyword"> | string
    volume?: IntFilter<"Keyword"> | number
    difficulty?: IntFilter<"Keyword"> | number
    cpc?: StringFilter<"Keyword"> | string
    intent?: StringFilter<"Keyword"> | string
    cluster?: StringNullableFilter<"Keyword"> | string | null
    status?: StringFilter<"Keyword"> | string
    createdAt?: DateTimeFilter<"Keyword"> | Date | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }

  export type KeywordOrderByWithRelationInput = {
    id?: SortOrder
    websiteId?: SortOrder
    term?: SortOrder
    volume?: SortOrder
    difficulty?: SortOrder
    cpc?: SortOrder
    intent?: SortOrder
    cluster?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    website?: WebsiteOrderByWithRelationInput
  }

  export type KeywordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    websiteId?: IntFilter<"Keyword"> | number
    term?: StringFilter<"Keyword"> | string
    volume?: IntFilter<"Keyword"> | number
    difficulty?: IntFilter<"Keyword"> | number
    cpc?: StringFilter<"Keyword"> | string
    intent?: StringFilter<"Keyword"> | string
    cluster?: StringNullableFilter<"Keyword"> | string | null
    status?: StringFilter<"Keyword"> | string
    createdAt?: DateTimeFilter<"Keyword"> | Date | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }, "id">

  export type KeywordOrderByWithAggregationInput = {
    id?: SortOrder
    websiteId?: SortOrder
    term?: SortOrder
    volume?: SortOrder
    difficulty?: SortOrder
    cpc?: SortOrder
    intent?: SortOrder
    cluster?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: KeywordCountOrderByAggregateInput
    _avg?: KeywordAvgOrderByAggregateInput
    _max?: KeywordMaxOrderByAggregateInput
    _min?: KeywordMinOrderByAggregateInput
    _sum?: KeywordSumOrderByAggregateInput
  }

  export type KeywordScalarWhereWithAggregatesInput = {
    AND?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    OR?: KeywordScalarWhereWithAggregatesInput[]
    NOT?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Keyword"> | number
    websiteId?: IntWithAggregatesFilter<"Keyword"> | number
    term?: StringWithAggregatesFilter<"Keyword"> | string
    volume?: IntWithAggregatesFilter<"Keyword"> | number
    difficulty?: IntWithAggregatesFilter<"Keyword"> | number
    cpc?: StringWithAggregatesFilter<"Keyword"> | string
    intent?: StringWithAggregatesFilter<"Keyword"> | string
    cluster?: StringNullableWithAggregatesFilter<"Keyword"> | string | null
    status?: StringWithAggregatesFilter<"Keyword"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Keyword"> | Date | string
  }

  export type CompetitorWhereInput = {
    AND?: CompetitorWhereInput | CompetitorWhereInput[]
    OR?: CompetitorWhereInput[]
    NOT?: CompetitorWhereInput | CompetitorWhereInput[]
    id?: IntFilter<"Competitor"> | number
    websiteId?: IntFilter<"Competitor"> | number
    name?: StringFilter<"Competitor"> | string
    domain?: StringFilter<"Competitor"> | string
    traffic?: StringFilter<"Competitor"> | string
    dr?: IntFilter<"Competitor"> | number
    keywordsCount?: IntFilter<"Competitor"> | number
    backlinksCount?: IntFilter<"Competitor"> | number
    createdAt?: DateTimeFilter<"Competitor"> | Date | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }

  export type CompetitorOrderByWithRelationInput = {
    id?: SortOrder
    websiteId?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    traffic?: SortOrder
    dr?: SortOrder
    keywordsCount?: SortOrder
    backlinksCount?: SortOrder
    createdAt?: SortOrder
    website?: WebsiteOrderByWithRelationInput
  }

  export type CompetitorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompetitorWhereInput | CompetitorWhereInput[]
    OR?: CompetitorWhereInput[]
    NOT?: CompetitorWhereInput | CompetitorWhereInput[]
    websiteId?: IntFilter<"Competitor"> | number
    name?: StringFilter<"Competitor"> | string
    domain?: StringFilter<"Competitor"> | string
    traffic?: StringFilter<"Competitor"> | string
    dr?: IntFilter<"Competitor"> | number
    keywordsCount?: IntFilter<"Competitor"> | number
    backlinksCount?: IntFilter<"Competitor"> | number
    createdAt?: DateTimeFilter<"Competitor"> | Date | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }, "id">

  export type CompetitorOrderByWithAggregationInput = {
    id?: SortOrder
    websiteId?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    traffic?: SortOrder
    dr?: SortOrder
    keywordsCount?: SortOrder
    backlinksCount?: SortOrder
    createdAt?: SortOrder
    _count?: CompetitorCountOrderByAggregateInput
    _avg?: CompetitorAvgOrderByAggregateInput
    _max?: CompetitorMaxOrderByAggregateInput
    _min?: CompetitorMinOrderByAggregateInput
    _sum?: CompetitorSumOrderByAggregateInput
  }

  export type CompetitorScalarWhereWithAggregatesInput = {
    AND?: CompetitorScalarWhereWithAggregatesInput | CompetitorScalarWhereWithAggregatesInput[]
    OR?: CompetitorScalarWhereWithAggregatesInput[]
    NOT?: CompetitorScalarWhereWithAggregatesInput | CompetitorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Competitor"> | number
    websiteId?: IntWithAggregatesFilter<"Competitor"> | number
    name?: StringWithAggregatesFilter<"Competitor"> | string
    domain?: StringWithAggregatesFilter<"Competitor"> | string
    traffic?: StringWithAggregatesFilter<"Competitor"> | string
    dr?: IntWithAggregatesFilter<"Competitor"> | number
    keywordsCount?: IntWithAggregatesFilter<"Competitor"> | number
    backlinksCount?: IntWithAggregatesFilter<"Competitor"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Competitor"> | Date | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: IntFilter<"BlogPost"> | number
    websiteId?: IntFilter<"BlogPost"> | number
    title?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    targetKeyword?: StringFilter<"BlogPost"> | string
    wordCount?: IntFilter<"BlogPost"> | number
    content?: StringFilter<"BlogPost"> | string
    metaTitle?: StringNullableFilter<"BlogPost"> | string | null
    metaDescription?: StringNullableFilter<"BlogPost"> | string | null
    schemaJson?: StringNullableFilter<"BlogPost"> | string | null
    status?: StringFilter<"BlogPost"> | string
    wpPostId?: IntNullableFilter<"BlogPost"> | number | null
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    websiteId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    targetKeyword?: SortOrder
    wordCount?: SortOrder
    content?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    schemaJson?: SortOrderInput | SortOrder
    status?: SortOrder
    wpPostId?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    website?: WebsiteOrderByWithRelationInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    websiteId?: IntFilter<"BlogPost"> | number
    title?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    targetKeyword?: StringFilter<"BlogPost"> | string
    wordCount?: IntFilter<"BlogPost"> | number
    content?: StringFilter<"BlogPost"> | string
    metaTitle?: StringNullableFilter<"BlogPost"> | string | null
    metaDescription?: StringNullableFilter<"BlogPost"> | string | null
    schemaJson?: StringNullableFilter<"BlogPost"> | string | null
    status?: StringFilter<"BlogPost"> | string
    wpPostId?: IntNullableFilter<"BlogPost"> | number | null
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }, "id">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    websiteId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    targetKeyword?: SortOrder
    wordCount?: SortOrder
    content?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    schemaJson?: SortOrderInput | SortOrder
    status?: SortOrder
    wpPostId?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _avg?: BlogPostAvgOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
    _sum?: BlogPostSumOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlogPost"> | number
    websiteId?: IntWithAggregatesFilter<"BlogPost"> | number
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    targetKeyword?: StringWithAggregatesFilter<"BlogPost"> | string
    wordCount?: IntWithAggregatesFilter<"BlogPost"> | number
    content?: StringWithAggregatesFilter<"BlogPost"> | string
    metaTitle?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    schemaJson?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    status?: StringWithAggregatesFilter<"BlogPost"> | string
    wpPostId?: IntNullableWithAggregatesFilter<"BlogPost"> | number | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
  }

  export type AnalyticsReportWhereInput = {
    AND?: AnalyticsReportWhereInput | AnalyticsReportWhereInput[]
    OR?: AnalyticsReportWhereInput[]
    NOT?: AnalyticsReportWhereInput | AnalyticsReportWhereInput[]
    id?: IntFilter<"AnalyticsReport"> | number
    websiteId?: IntFilter<"AnalyticsReport"> | number
    totalClicks?: IntFilter<"AnalyticsReport"> | number
    impressions?: IntFilter<"AnalyticsReport"> | number
    ctr?: FloatFilter<"AnalyticsReport"> | number
    avgPosition?: FloatFilter<"AnalyticsReport"> | number
    createdAt?: DateTimeFilter<"AnalyticsReport"> | Date | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }

  export type AnalyticsReportOrderByWithRelationInput = {
    id?: SortOrder
    websiteId?: SortOrder
    totalClicks?: SortOrder
    impressions?: SortOrder
    ctr?: SortOrder
    avgPosition?: SortOrder
    createdAt?: SortOrder
    website?: WebsiteOrderByWithRelationInput
  }

  export type AnalyticsReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnalyticsReportWhereInput | AnalyticsReportWhereInput[]
    OR?: AnalyticsReportWhereInput[]
    NOT?: AnalyticsReportWhereInput | AnalyticsReportWhereInput[]
    websiteId?: IntFilter<"AnalyticsReport"> | number
    totalClicks?: IntFilter<"AnalyticsReport"> | number
    impressions?: IntFilter<"AnalyticsReport"> | number
    ctr?: FloatFilter<"AnalyticsReport"> | number
    avgPosition?: FloatFilter<"AnalyticsReport"> | number
    createdAt?: DateTimeFilter<"AnalyticsReport"> | Date | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }, "id">

  export type AnalyticsReportOrderByWithAggregationInput = {
    id?: SortOrder
    websiteId?: SortOrder
    totalClicks?: SortOrder
    impressions?: SortOrder
    ctr?: SortOrder
    avgPosition?: SortOrder
    createdAt?: SortOrder
    _count?: AnalyticsReportCountOrderByAggregateInput
    _avg?: AnalyticsReportAvgOrderByAggregateInput
    _max?: AnalyticsReportMaxOrderByAggregateInput
    _min?: AnalyticsReportMinOrderByAggregateInput
    _sum?: AnalyticsReportSumOrderByAggregateInput
  }

  export type AnalyticsReportScalarWhereWithAggregatesInput = {
    AND?: AnalyticsReportScalarWhereWithAggregatesInput | AnalyticsReportScalarWhereWithAggregatesInput[]
    OR?: AnalyticsReportScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsReportScalarWhereWithAggregatesInput | AnalyticsReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AnalyticsReport"> | number
    websiteId?: IntWithAggregatesFilter<"AnalyticsReport"> | number
    totalClicks?: IntWithAggregatesFilter<"AnalyticsReport"> | number
    impressions?: IntWithAggregatesFilter<"AnalyticsReport"> | number
    ctr?: FloatWithAggregatesFilter<"AnalyticsReport"> | number
    avgPosition?: FloatWithAggregatesFilter<"AnalyticsReport"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AnalyticsReport"> | Date | string
  }

  export type WebsiteCreateInput = {
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: SeoAuditCreateNestedManyWithoutWebsiteInput
    keywords?: KeywordCreateNestedManyWithoutWebsiteInput
    blogs?: BlogPostCreateNestedManyWithoutWebsiteInput
    competitors?: CompetitorCreateNestedManyWithoutWebsiteInput
    reports?: AnalyticsReportCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateInput = {
    id?: number
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: SeoAuditUncheckedCreateNestedManyWithoutWebsiteInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutWebsiteInput
    blogs?: BlogPostUncheckedCreateNestedManyWithoutWebsiteInput
    competitors?: CompetitorUncheckedCreateNestedManyWithoutWebsiteInput
    reports?: AnalyticsReportUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: SeoAuditUpdateManyWithoutWebsiteNestedInput
    keywords?: KeywordUpdateManyWithoutWebsiteNestedInput
    blogs?: BlogPostUpdateManyWithoutWebsiteNestedInput
    competitors?: CompetitorUpdateManyWithoutWebsiteNestedInput
    reports?: AnalyticsReportUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: SeoAuditUncheckedUpdateManyWithoutWebsiteNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutWebsiteNestedInput
    blogs?: BlogPostUncheckedUpdateManyWithoutWebsiteNestedInput
    competitors?: CompetitorUncheckedUpdateManyWithoutWebsiteNestedInput
    reports?: AnalyticsReportUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteCreateManyInput = {
    id?: number
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsiteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoAuditCreateInput = {
    healthScore?: number
    criticalCount?: number
    warningCount?: number
    noticeCount?: number
    pagesCrawled?: number
    issues: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    website: WebsiteCreateNestedOneWithoutAuditsInput
  }

  export type SeoAuditUncheckedCreateInput = {
    id?: number
    websiteId: number
    healthScore?: number
    criticalCount?: number
    warningCount?: number
    noticeCount?: number
    pagesCrawled?: number
    issues: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SeoAuditUpdateInput = {
    healthScore?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    noticeCount?: IntFieldUpdateOperationsInput | number
    pagesCrawled?: IntFieldUpdateOperationsInput | number
    issues?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website?: WebsiteUpdateOneRequiredWithoutAuditsNestedInput
  }

  export type SeoAuditUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    websiteId?: IntFieldUpdateOperationsInput | number
    healthScore?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    noticeCount?: IntFieldUpdateOperationsInput | number
    pagesCrawled?: IntFieldUpdateOperationsInput | number
    issues?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoAuditCreateManyInput = {
    id?: number
    websiteId: number
    healthScore?: number
    criticalCount?: number
    warningCount?: number
    noticeCount?: number
    pagesCrawled?: number
    issues: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SeoAuditUpdateManyMutationInput = {
    healthScore?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    noticeCount?: IntFieldUpdateOperationsInput | number
    pagesCrawled?: IntFieldUpdateOperationsInput | number
    issues?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoAuditUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    websiteId?: IntFieldUpdateOperationsInput | number
    healthScore?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    noticeCount?: IntFieldUpdateOperationsInput | number
    pagesCrawled?: IntFieldUpdateOperationsInput | number
    issues?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordCreateInput = {
    term: string
    volume?: number
    difficulty?: number
    cpc?: string
    intent?: string
    cluster?: string | null
    status?: string
    createdAt?: Date | string
    website: WebsiteCreateNestedOneWithoutKeywordsInput
  }

  export type KeywordUncheckedCreateInput = {
    id?: number
    websiteId: number
    term: string
    volume?: number
    difficulty?: number
    cpc?: string
    intent?: string
    cluster?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type KeywordUpdateInput = {
    term?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    cpc?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website?: WebsiteUpdateOneRequiredWithoutKeywordsNestedInput
  }

  export type KeywordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    websiteId?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    cpc?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordCreateManyInput = {
    id?: number
    websiteId: number
    term: string
    volume?: number
    difficulty?: number
    cpc?: string
    intent?: string
    cluster?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type KeywordUpdateManyMutationInput = {
    term?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    cpc?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    websiteId?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    cpc?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorCreateInput = {
    name: string
    domain: string
    traffic?: string
    dr?: number
    keywordsCount?: number
    backlinksCount?: number
    createdAt?: Date | string
    website: WebsiteCreateNestedOneWithoutCompetitorsInput
  }

  export type CompetitorUncheckedCreateInput = {
    id?: number
    websiteId: number
    name: string
    domain: string
    traffic?: string
    dr?: number
    keywordsCount?: number
    backlinksCount?: number
    createdAt?: Date | string
  }

  export type CompetitorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    traffic?: StringFieldUpdateOperationsInput | string
    dr?: IntFieldUpdateOperationsInput | number
    keywordsCount?: IntFieldUpdateOperationsInput | number
    backlinksCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website?: WebsiteUpdateOneRequiredWithoutCompetitorsNestedInput
  }

  export type CompetitorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    websiteId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    traffic?: StringFieldUpdateOperationsInput | string
    dr?: IntFieldUpdateOperationsInput | number
    keywordsCount?: IntFieldUpdateOperationsInput | number
    backlinksCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorCreateManyInput = {
    id?: number
    websiteId: number
    name: string
    domain: string
    traffic?: string
    dr?: number
    keywordsCount?: number
    backlinksCount?: number
    createdAt?: Date | string
  }

  export type CompetitorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    traffic?: StringFieldUpdateOperationsInput | string
    dr?: IntFieldUpdateOperationsInput | number
    keywordsCount?: IntFieldUpdateOperationsInput | number
    backlinksCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    websiteId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    traffic?: StringFieldUpdateOperationsInput | string
    dr?: IntFieldUpdateOperationsInput | number
    keywordsCount?: IntFieldUpdateOperationsInput | number
    backlinksCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateInput = {
    title: string
    slug: string
    targetKeyword: string
    wordCount?: number
    content: string
    metaTitle?: string | null
    metaDescription?: string | null
    schemaJson?: string | null
    status?: string
    wpPostId?: number | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    website: WebsiteCreateNestedOneWithoutBlogsInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: number
    websiteId: number
    title: string
    slug: string
    targetKeyword: string
    wordCount?: number
    content: string
    metaTitle?: string | null
    metaDescription?: string | null
    schemaJson?: string | null
    status?: string
    wpPostId?: number | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    targetKeyword?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    schemaJson?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    wpPostId?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website?: WebsiteUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    websiteId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    targetKeyword?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    schemaJson?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    wpPostId?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateManyInput = {
    id?: number
    websiteId: number
    title: string
    slug: string
    targetKeyword: string
    wordCount?: number
    content: string
    metaTitle?: string | null
    metaDescription?: string | null
    schemaJson?: string | null
    status?: string
    wpPostId?: number | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    targetKeyword?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    schemaJson?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    wpPostId?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    websiteId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    targetKeyword?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    schemaJson?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    wpPostId?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsReportCreateInput = {
    totalClicks?: number
    impressions?: number
    ctr?: number
    avgPosition?: number
    createdAt?: Date | string
    website: WebsiteCreateNestedOneWithoutReportsInput
  }

  export type AnalyticsReportUncheckedCreateInput = {
    id?: number
    websiteId: number
    totalClicks?: number
    impressions?: number
    ctr?: number
    avgPosition?: number
    createdAt?: Date | string
  }

  export type AnalyticsReportUpdateInput = {
    totalClicks?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    avgPosition?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website?: WebsiteUpdateOneRequiredWithoutReportsNestedInput
  }

  export type AnalyticsReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    websiteId?: IntFieldUpdateOperationsInput | number
    totalClicks?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    avgPosition?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsReportCreateManyInput = {
    id?: number
    websiteId: number
    totalClicks?: number
    impressions?: number
    ctr?: number
    avgPosition?: number
    createdAt?: Date | string
  }

  export type AnalyticsReportUpdateManyMutationInput = {
    totalClicks?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    avgPosition?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    websiteId?: IntFieldUpdateOperationsInput | number
    totalClicks?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    avgPosition?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SeoAuditListRelationFilter = {
    every?: SeoAuditWhereInput
    some?: SeoAuditWhereInput
    none?: SeoAuditWhereInput
  }

  export type KeywordListRelationFilter = {
    every?: KeywordWhereInput
    some?: KeywordWhereInput
    none?: KeywordWhereInput
  }

  export type BlogPostListRelationFilter = {
    every?: BlogPostWhereInput
    some?: BlogPostWhereInput
    none?: BlogPostWhereInput
  }

  export type CompetitorListRelationFilter = {
    every?: CompetitorWhereInput
    some?: CompetitorWhereInput
    none?: CompetitorWhereInput
  }

  export type AnalyticsReportListRelationFilter = {
    every?: AnalyticsReportWhereInput
    some?: AnalyticsReportWhereInput
    none?: AnalyticsReportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SeoAuditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeywordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalyticsReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebsiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    country?: SortOrder
    industry?: SortOrder
    language?: SortOrder
    status?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteAvgOrderByAggregateInput = {
    id?: SortOrder
    seoScore?: SortOrder
  }

  export type WebsiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    country?: SortOrder
    industry?: SortOrder
    language?: SortOrder
    status?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    country?: SortOrder
    industry?: SortOrder
    language?: SortOrder
    status?: SortOrder
    seoScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteSumOrderByAggregateInput = {
    id?: SortOrder
    seoScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WebsiteScalarRelationFilter = {
    is?: WebsiteWhereInput
    isNot?: WebsiteWhereInput
  }

  export type SeoAuditCountOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    healthScore?: SortOrder
    criticalCount?: SortOrder
    warningCount?: SortOrder
    noticeCount?: SortOrder
    pagesCrawled?: SortOrder
    issues?: SortOrder
    createdAt?: SortOrder
  }

  export type SeoAuditAvgOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    healthScore?: SortOrder
    criticalCount?: SortOrder
    warningCount?: SortOrder
    noticeCount?: SortOrder
    pagesCrawled?: SortOrder
  }

  export type SeoAuditMaxOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    healthScore?: SortOrder
    criticalCount?: SortOrder
    warningCount?: SortOrder
    noticeCount?: SortOrder
    pagesCrawled?: SortOrder
    createdAt?: SortOrder
  }

  export type SeoAuditMinOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    healthScore?: SortOrder
    criticalCount?: SortOrder
    warningCount?: SortOrder
    noticeCount?: SortOrder
    pagesCrawled?: SortOrder
    createdAt?: SortOrder
  }

  export type SeoAuditSumOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    healthScore?: SortOrder
    criticalCount?: SortOrder
    warningCount?: SortOrder
    noticeCount?: SortOrder
    pagesCrawled?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type KeywordCountOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    term?: SortOrder
    volume?: SortOrder
    difficulty?: SortOrder
    cpc?: SortOrder
    intent?: SortOrder
    cluster?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type KeywordAvgOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    volume?: SortOrder
    difficulty?: SortOrder
  }

  export type KeywordMaxOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    term?: SortOrder
    volume?: SortOrder
    difficulty?: SortOrder
    cpc?: SortOrder
    intent?: SortOrder
    cluster?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type KeywordMinOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    term?: SortOrder
    volume?: SortOrder
    difficulty?: SortOrder
    cpc?: SortOrder
    intent?: SortOrder
    cluster?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type KeywordSumOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    volume?: SortOrder
    difficulty?: SortOrder
  }

  export type CompetitorCountOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    traffic?: SortOrder
    dr?: SortOrder
    keywordsCount?: SortOrder
    backlinksCount?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitorAvgOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    dr?: SortOrder
    keywordsCount?: SortOrder
    backlinksCount?: SortOrder
  }

  export type CompetitorMaxOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    traffic?: SortOrder
    dr?: SortOrder
    keywordsCount?: SortOrder
    backlinksCount?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitorMinOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    traffic?: SortOrder
    dr?: SortOrder
    keywordsCount?: SortOrder
    backlinksCount?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitorSumOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    dr?: SortOrder
    keywordsCount?: SortOrder
    backlinksCount?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    targetKeyword?: SortOrder
    wordCount?: SortOrder
    content?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    schemaJson?: SortOrder
    status?: SortOrder
    wpPostId?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostAvgOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    wordCount?: SortOrder
    wpPostId?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    targetKeyword?: SortOrder
    wordCount?: SortOrder
    content?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    schemaJson?: SortOrder
    status?: SortOrder
    wpPostId?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    targetKeyword?: SortOrder
    wordCount?: SortOrder
    content?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    schemaJson?: SortOrder
    status?: SortOrder
    wpPostId?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostSumOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    wordCount?: SortOrder
    wpPostId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AnalyticsReportCountOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    totalClicks?: SortOrder
    impressions?: SortOrder
    ctr?: SortOrder
    avgPosition?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsReportAvgOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    totalClicks?: SortOrder
    impressions?: SortOrder
    ctr?: SortOrder
    avgPosition?: SortOrder
  }

  export type AnalyticsReportMaxOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    totalClicks?: SortOrder
    impressions?: SortOrder
    ctr?: SortOrder
    avgPosition?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsReportMinOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    totalClicks?: SortOrder
    impressions?: SortOrder
    ctr?: SortOrder
    avgPosition?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsReportSumOrderByAggregateInput = {
    id?: SortOrder
    websiteId?: SortOrder
    totalClicks?: SortOrder
    impressions?: SortOrder
    ctr?: SortOrder
    avgPosition?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SeoAuditCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<SeoAuditCreateWithoutWebsiteInput, SeoAuditUncheckedCreateWithoutWebsiteInput> | SeoAuditCreateWithoutWebsiteInput[] | SeoAuditUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: SeoAuditCreateOrConnectWithoutWebsiteInput | SeoAuditCreateOrConnectWithoutWebsiteInput[]
    createMany?: SeoAuditCreateManyWebsiteInputEnvelope
    connect?: SeoAuditWhereUniqueInput | SeoAuditWhereUniqueInput[]
  }

  export type KeywordCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<KeywordCreateWithoutWebsiteInput, KeywordUncheckedCreateWithoutWebsiteInput> | KeywordCreateWithoutWebsiteInput[] | KeywordUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutWebsiteInput | KeywordCreateOrConnectWithoutWebsiteInput[]
    createMany?: KeywordCreateManyWebsiteInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type BlogPostCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<BlogPostCreateWithoutWebsiteInput, BlogPostUncheckedCreateWithoutWebsiteInput> | BlogPostCreateWithoutWebsiteInput[] | BlogPostUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutWebsiteInput | BlogPostCreateOrConnectWithoutWebsiteInput[]
    createMany?: BlogPostCreateManyWebsiteInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type CompetitorCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<CompetitorCreateWithoutWebsiteInput, CompetitorUncheckedCreateWithoutWebsiteInput> | CompetitorCreateWithoutWebsiteInput[] | CompetitorUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: CompetitorCreateOrConnectWithoutWebsiteInput | CompetitorCreateOrConnectWithoutWebsiteInput[]
    createMany?: CompetitorCreateManyWebsiteInputEnvelope
    connect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
  }

  export type AnalyticsReportCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<AnalyticsReportCreateWithoutWebsiteInput, AnalyticsReportUncheckedCreateWithoutWebsiteInput> | AnalyticsReportCreateWithoutWebsiteInput[] | AnalyticsReportUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: AnalyticsReportCreateOrConnectWithoutWebsiteInput | AnalyticsReportCreateOrConnectWithoutWebsiteInput[]
    createMany?: AnalyticsReportCreateManyWebsiteInputEnvelope
    connect?: AnalyticsReportWhereUniqueInput | AnalyticsReportWhereUniqueInput[]
  }

  export type SeoAuditUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<SeoAuditCreateWithoutWebsiteInput, SeoAuditUncheckedCreateWithoutWebsiteInput> | SeoAuditCreateWithoutWebsiteInput[] | SeoAuditUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: SeoAuditCreateOrConnectWithoutWebsiteInput | SeoAuditCreateOrConnectWithoutWebsiteInput[]
    createMany?: SeoAuditCreateManyWebsiteInputEnvelope
    connect?: SeoAuditWhereUniqueInput | SeoAuditWhereUniqueInput[]
  }

  export type KeywordUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<KeywordCreateWithoutWebsiteInput, KeywordUncheckedCreateWithoutWebsiteInput> | KeywordCreateWithoutWebsiteInput[] | KeywordUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutWebsiteInput | KeywordCreateOrConnectWithoutWebsiteInput[]
    createMany?: KeywordCreateManyWebsiteInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<BlogPostCreateWithoutWebsiteInput, BlogPostUncheckedCreateWithoutWebsiteInput> | BlogPostCreateWithoutWebsiteInput[] | BlogPostUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutWebsiteInput | BlogPostCreateOrConnectWithoutWebsiteInput[]
    createMany?: BlogPostCreateManyWebsiteInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type CompetitorUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<CompetitorCreateWithoutWebsiteInput, CompetitorUncheckedCreateWithoutWebsiteInput> | CompetitorCreateWithoutWebsiteInput[] | CompetitorUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: CompetitorCreateOrConnectWithoutWebsiteInput | CompetitorCreateOrConnectWithoutWebsiteInput[]
    createMany?: CompetitorCreateManyWebsiteInputEnvelope
    connect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
  }

  export type AnalyticsReportUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<AnalyticsReportCreateWithoutWebsiteInput, AnalyticsReportUncheckedCreateWithoutWebsiteInput> | AnalyticsReportCreateWithoutWebsiteInput[] | AnalyticsReportUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: AnalyticsReportCreateOrConnectWithoutWebsiteInput | AnalyticsReportCreateOrConnectWithoutWebsiteInput[]
    createMany?: AnalyticsReportCreateManyWebsiteInputEnvelope
    connect?: AnalyticsReportWhereUniqueInput | AnalyticsReportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type SeoAuditUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<SeoAuditCreateWithoutWebsiteInput, SeoAuditUncheckedCreateWithoutWebsiteInput> | SeoAuditCreateWithoutWebsiteInput[] | SeoAuditUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: SeoAuditCreateOrConnectWithoutWebsiteInput | SeoAuditCreateOrConnectWithoutWebsiteInput[]
    upsert?: SeoAuditUpsertWithWhereUniqueWithoutWebsiteInput | SeoAuditUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: SeoAuditCreateManyWebsiteInputEnvelope
    set?: SeoAuditWhereUniqueInput | SeoAuditWhereUniqueInput[]
    disconnect?: SeoAuditWhereUniqueInput | SeoAuditWhereUniqueInput[]
    delete?: SeoAuditWhereUniqueInput | SeoAuditWhereUniqueInput[]
    connect?: SeoAuditWhereUniqueInput | SeoAuditWhereUniqueInput[]
    update?: SeoAuditUpdateWithWhereUniqueWithoutWebsiteInput | SeoAuditUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: SeoAuditUpdateManyWithWhereWithoutWebsiteInput | SeoAuditUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: SeoAuditScalarWhereInput | SeoAuditScalarWhereInput[]
  }

  export type KeywordUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<KeywordCreateWithoutWebsiteInput, KeywordUncheckedCreateWithoutWebsiteInput> | KeywordCreateWithoutWebsiteInput[] | KeywordUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutWebsiteInput | KeywordCreateOrConnectWithoutWebsiteInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutWebsiteInput | KeywordUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: KeywordCreateManyWebsiteInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutWebsiteInput | KeywordUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutWebsiteInput | KeywordUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type BlogPostUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<BlogPostCreateWithoutWebsiteInput, BlogPostUncheckedCreateWithoutWebsiteInput> | BlogPostCreateWithoutWebsiteInput[] | BlogPostUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutWebsiteInput | BlogPostCreateOrConnectWithoutWebsiteInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutWebsiteInput | BlogPostUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: BlogPostCreateManyWebsiteInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutWebsiteInput | BlogPostUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutWebsiteInput | BlogPostUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type CompetitorUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<CompetitorCreateWithoutWebsiteInput, CompetitorUncheckedCreateWithoutWebsiteInput> | CompetitorCreateWithoutWebsiteInput[] | CompetitorUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: CompetitorCreateOrConnectWithoutWebsiteInput | CompetitorCreateOrConnectWithoutWebsiteInput[]
    upsert?: CompetitorUpsertWithWhereUniqueWithoutWebsiteInput | CompetitorUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: CompetitorCreateManyWebsiteInputEnvelope
    set?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    disconnect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    delete?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    connect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    update?: CompetitorUpdateWithWhereUniqueWithoutWebsiteInput | CompetitorUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: CompetitorUpdateManyWithWhereWithoutWebsiteInput | CompetitorUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: CompetitorScalarWhereInput | CompetitorScalarWhereInput[]
  }

  export type AnalyticsReportUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<AnalyticsReportCreateWithoutWebsiteInput, AnalyticsReportUncheckedCreateWithoutWebsiteInput> | AnalyticsReportCreateWithoutWebsiteInput[] | AnalyticsReportUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: AnalyticsReportCreateOrConnectWithoutWebsiteInput | AnalyticsReportCreateOrConnectWithoutWebsiteInput[]
    upsert?: AnalyticsReportUpsertWithWhereUniqueWithoutWebsiteInput | AnalyticsReportUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: AnalyticsReportCreateManyWebsiteInputEnvelope
    set?: AnalyticsReportWhereUniqueInput | AnalyticsReportWhereUniqueInput[]
    disconnect?: AnalyticsReportWhereUniqueInput | AnalyticsReportWhereUniqueInput[]
    delete?: AnalyticsReportWhereUniqueInput | AnalyticsReportWhereUniqueInput[]
    connect?: AnalyticsReportWhereUniqueInput | AnalyticsReportWhereUniqueInput[]
    update?: AnalyticsReportUpdateWithWhereUniqueWithoutWebsiteInput | AnalyticsReportUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: AnalyticsReportUpdateManyWithWhereWithoutWebsiteInput | AnalyticsReportUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: AnalyticsReportScalarWhereInput | AnalyticsReportScalarWhereInput[]
  }

  export type SeoAuditUncheckedUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<SeoAuditCreateWithoutWebsiteInput, SeoAuditUncheckedCreateWithoutWebsiteInput> | SeoAuditCreateWithoutWebsiteInput[] | SeoAuditUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: SeoAuditCreateOrConnectWithoutWebsiteInput | SeoAuditCreateOrConnectWithoutWebsiteInput[]
    upsert?: SeoAuditUpsertWithWhereUniqueWithoutWebsiteInput | SeoAuditUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: SeoAuditCreateManyWebsiteInputEnvelope
    set?: SeoAuditWhereUniqueInput | SeoAuditWhereUniqueInput[]
    disconnect?: SeoAuditWhereUniqueInput | SeoAuditWhereUniqueInput[]
    delete?: SeoAuditWhereUniqueInput | SeoAuditWhereUniqueInput[]
    connect?: SeoAuditWhereUniqueInput | SeoAuditWhereUniqueInput[]
    update?: SeoAuditUpdateWithWhereUniqueWithoutWebsiteInput | SeoAuditUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: SeoAuditUpdateManyWithWhereWithoutWebsiteInput | SeoAuditUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: SeoAuditScalarWhereInput | SeoAuditScalarWhereInput[]
  }

  export type KeywordUncheckedUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<KeywordCreateWithoutWebsiteInput, KeywordUncheckedCreateWithoutWebsiteInput> | KeywordCreateWithoutWebsiteInput[] | KeywordUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutWebsiteInput | KeywordCreateOrConnectWithoutWebsiteInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutWebsiteInput | KeywordUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: KeywordCreateManyWebsiteInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutWebsiteInput | KeywordUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutWebsiteInput | KeywordUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<BlogPostCreateWithoutWebsiteInput, BlogPostUncheckedCreateWithoutWebsiteInput> | BlogPostCreateWithoutWebsiteInput[] | BlogPostUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutWebsiteInput | BlogPostCreateOrConnectWithoutWebsiteInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutWebsiteInput | BlogPostUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: BlogPostCreateManyWebsiteInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutWebsiteInput | BlogPostUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutWebsiteInput | BlogPostUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type CompetitorUncheckedUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<CompetitorCreateWithoutWebsiteInput, CompetitorUncheckedCreateWithoutWebsiteInput> | CompetitorCreateWithoutWebsiteInput[] | CompetitorUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: CompetitorCreateOrConnectWithoutWebsiteInput | CompetitorCreateOrConnectWithoutWebsiteInput[]
    upsert?: CompetitorUpsertWithWhereUniqueWithoutWebsiteInput | CompetitorUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: CompetitorCreateManyWebsiteInputEnvelope
    set?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    disconnect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    delete?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    connect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    update?: CompetitorUpdateWithWhereUniqueWithoutWebsiteInput | CompetitorUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: CompetitorUpdateManyWithWhereWithoutWebsiteInput | CompetitorUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: CompetitorScalarWhereInput | CompetitorScalarWhereInput[]
  }

  export type AnalyticsReportUncheckedUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<AnalyticsReportCreateWithoutWebsiteInput, AnalyticsReportUncheckedCreateWithoutWebsiteInput> | AnalyticsReportCreateWithoutWebsiteInput[] | AnalyticsReportUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: AnalyticsReportCreateOrConnectWithoutWebsiteInput | AnalyticsReportCreateOrConnectWithoutWebsiteInput[]
    upsert?: AnalyticsReportUpsertWithWhereUniqueWithoutWebsiteInput | AnalyticsReportUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: AnalyticsReportCreateManyWebsiteInputEnvelope
    set?: AnalyticsReportWhereUniqueInput | AnalyticsReportWhereUniqueInput[]
    disconnect?: AnalyticsReportWhereUniqueInput | AnalyticsReportWhereUniqueInput[]
    delete?: AnalyticsReportWhereUniqueInput | AnalyticsReportWhereUniqueInput[]
    connect?: AnalyticsReportWhereUniqueInput | AnalyticsReportWhereUniqueInput[]
    update?: AnalyticsReportUpdateWithWhereUniqueWithoutWebsiteInput | AnalyticsReportUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: AnalyticsReportUpdateManyWithWhereWithoutWebsiteInput | AnalyticsReportUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: AnalyticsReportScalarWhereInput | AnalyticsReportScalarWhereInput[]
  }

  export type WebsiteCreateNestedOneWithoutAuditsInput = {
    create?: XOR<WebsiteCreateWithoutAuditsInput, WebsiteUncheckedCreateWithoutAuditsInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutAuditsInput
    connect?: WebsiteWhereUniqueInput
  }

  export type WebsiteUpdateOneRequiredWithoutAuditsNestedInput = {
    create?: XOR<WebsiteCreateWithoutAuditsInput, WebsiteUncheckedCreateWithoutAuditsInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutAuditsInput
    upsert?: WebsiteUpsertWithoutAuditsInput
    connect?: WebsiteWhereUniqueInput
    update?: XOR<XOR<WebsiteUpdateToOneWithWhereWithoutAuditsInput, WebsiteUpdateWithoutAuditsInput>, WebsiteUncheckedUpdateWithoutAuditsInput>
  }

  export type WebsiteCreateNestedOneWithoutKeywordsInput = {
    create?: XOR<WebsiteCreateWithoutKeywordsInput, WebsiteUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutKeywordsInput
    connect?: WebsiteWhereUniqueInput
  }

  export type WebsiteUpdateOneRequiredWithoutKeywordsNestedInput = {
    create?: XOR<WebsiteCreateWithoutKeywordsInput, WebsiteUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutKeywordsInput
    upsert?: WebsiteUpsertWithoutKeywordsInput
    connect?: WebsiteWhereUniqueInput
    update?: XOR<XOR<WebsiteUpdateToOneWithWhereWithoutKeywordsInput, WebsiteUpdateWithoutKeywordsInput>, WebsiteUncheckedUpdateWithoutKeywordsInput>
  }

  export type WebsiteCreateNestedOneWithoutCompetitorsInput = {
    create?: XOR<WebsiteCreateWithoutCompetitorsInput, WebsiteUncheckedCreateWithoutCompetitorsInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutCompetitorsInput
    connect?: WebsiteWhereUniqueInput
  }

  export type WebsiteUpdateOneRequiredWithoutCompetitorsNestedInput = {
    create?: XOR<WebsiteCreateWithoutCompetitorsInput, WebsiteUncheckedCreateWithoutCompetitorsInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutCompetitorsInput
    upsert?: WebsiteUpsertWithoutCompetitorsInput
    connect?: WebsiteWhereUniqueInput
    update?: XOR<XOR<WebsiteUpdateToOneWithWhereWithoutCompetitorsInput, WebsiteUpdateWithoutCompetitorsInput>, WebsiteUncheckedUpdateWithoutCompetitorsInput>
  }

  export type WebsiteCreateNestedOneWithoutBlogsInput = {
    create?: XOR<WebsiteCreateWithoutBlogsInput, WebsiteUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutBlogsInput
    connect?: WebsiteWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WebsiteUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<WebsiteCreateWithoutBlogsInput, WebsiteUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutBlogsInput
    upsert?: WebsiteUpsertWithoutBlogsInput
    connect?: WebsiteWhereUniqueInput
    update?: XOR<XOR<WebsiteUpdateToOneWithWhereWithoutBlogsInput, WebsiteUpdateWithoutBlogsInput>, WebsiteUncheckedUpdateWithoutBlogsInput>
  }

  export type WebsiteCreateNestedOneWithoutReportsInput = {
    create?: XOR<WebsiteCreateWithoutReportsInput, WebsiteUncheckedCreateWithoutReportsInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutReportsInput
    connect?: WebsiteWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WebsiteUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<WebsiteCreateWithoutReportsInput, WebsiteUncheckedCreateWithoutReportsInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutReportsInput
    upsert?: WebsiteUpsertWithoutReportsInput
    connect?: WebsiteWhereUniqueInput
    update?: XOR<XOR<WebsiteUpdateToOneWithWhereWithoutReportsInput, WebsiteUpdateWithoutReportsInput>, WebsiteUncheckedUpdateWithoutReportsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SeoAuditCreateWithoutWebsiteInput = {
    healthScore?: number
    criticalCount?: number
    warningCount?: number
    noticeCount?: number
    pagesCrawled?: number
    issues: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SeoAuditUncheckedCreateWithoutWebsiteInput = {
    id?: number
    healthScore?: number
    criticalCount?: number
    warningCount?: number
    noticeCount?: number
    pagesCrawled?: number
    issues: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SeoAuditCreateOrConnectWithoutWebsiteInput = {
    where: SeoAuditWhereUniqueInput
    create: XOR<SeoAuditCreateWithoutWebsiteInput, SeoAuditUncheckedCreateWithoutWebsiteInput>
  }

  export type SeoAuditCreateManyWebsiteInputEnvelope = {
    data: SeoAuditCreateManyWebsiteInput | SeoAuditCreateManyWebsiteInput[]
    skipDuplicates?: boolean
  }

  export type KeywordCreateWithoutWebsiteInput = {
    term: string
    volume?: number
    difficulty?: number
    cpc?: string
    intent?: string
    cluster?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type KeywordUncheckedCreateWithoutWebsiteInput = {
    id?: number
    term: string
    volume?: number
    difficulty?: number
    cpc?: string
    intent?: string
    cluster?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type KeywordCreateOrConnectWithoutWebsiteInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutWebsiteInput, KeywordUncheckedCreateWithoutWebsiteInput>
  }

  export type KeywordCreateManyWebsiteInputEnvelope = {
    data: KeywordCreateManyWebsiteInput | KeywordCreateManyWebsiteInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostCreateWithoutWebsiteInput = {
    title: string
    slug: string
    targetKeyword: string
    wordCount?: number
    content: string
    metaTitle?: string | null
    metaDescription?: string | null
    schemaJson?: string | null
    status?: string
    wpPostId?: number | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUncheckedCreateWithoutWebsiteInput = {
    id?: number
    title: string
    slug: string
    targetKeyword: string
    wordCount?: number
    content: string
    metaTitle?: string | null
    metaDescription?: string | null
    schemaJson?: string | null
    status?: string
    wpPostId?: number | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostCreateOrConnectWithoutWebsiteInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutWebsiteInput, BlogPostUncheckedCreateWithoutWebsiteInput>
  }

  export type BlogPostCreateManyWebsiteInputEnvelope = {
    data: BlogPostCreateManyWebsiteInput | BlogPostCreateManyWebsiteInput[]
    skipDuplicates?: boolean
  }

  export type CompetitorCreateWithoutWebsiteInput = {
    name: string
    domain: string
    traffic?: string
    dr?: number
    keywordsCount?: number
    backlinksCount?: number
    createdAt?: Date | string
  }

  export type CompetitorUncheckedCreateWithoutWebsiteInput = {
    id?: number
    name: string
    domain: string
    traffic?: string
    dr?: number
    keywordsCount?: number
    backlinksCount?: number
    createdAt?: Date | string
  }

  export type CompetitorCreateOrConnectWithoutWebsiteInput = {
    where: CompetitorWhereUniqueInput
    create: XOR<CompetitorCreateWithoutWebsiteInput, CompetitorUncheckedCreateWithoutWebsiteInput>
  }

  export type CompetitorCreateManyWebsiteInputEnvelope = {
    data: CompetitorCreateManyWebsiteInput | CompetitorCreateManyWebsiteInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsReportCreateWithoutWebsiteInput = {
    totalClicks?: number
    impressions?: number
    ctr?: number
    avgPosition?: number
    createdAt?: Date | string
  }

  export type AnalyticsReportUncheckedCreateWithoutWebsiteInput = {
    id?: number
    totalClicks?: number
    impressions?: number
    ctr?: number
    avgPosition?: number
    createdAt?: Date | string
  }

  export type AnalyticsReportCreateOrConnectWithoutWebsiteInput = {
    where: AnalyticsReportWhereUniqueInput
    create: XOR<AnalyticsReportCreateWithoutWebsiteInput, AnalyticsReportUncheckedCreateWithoutWebsiteInput>
  }

  export type AnalyticsReportCreateManyWebsiteInputEnvelope = {
    data: AnalyticsReportCreateManyWebsiteInput | AnalyticsReportCreateManyWebsiteInput[]
    skipDuplicates?: boolean
  }

  export type SeoAuditUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: SeoAuditWhereUniqueInput
    update: XOR<SeoAuditUpdateWithoutWebsiteInput, SeoAuditUncheckedUpdateWithoutWebsiteInput>
    create: XOR<SeoAuditCreateWithoutWebsiteInput, SeoAuditUncheckedCreateWithoutWebsiteInput>
  }

  export type SeoAuditUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: SeoAuditWhereUniqueInput
    data: XOR<SeoAuditUpdateWithoutWebsiteInput, SeoAuditUncheckedUpdateWithoutWebsiteInput>
  }

  export type SeoAuditUpdateManyWithWhereWithoutWebsiteInput = {
    where: SeoAuditScalarWhereInput
    data: XOR<SeoAuditUpdateManyMutationInput, SeoAuditUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type SeoAuditScalarWhereInput = {
    AND?: SeoAuditScalarWhereInput | SeoAuditScalarWhereInput[]
    OR?: SeoAuditScalarWhereInput[]
    NOT?: SeoAuditScalarWhereInput | SeoAuditScalarWhereInput[]
    id?: IntFilter<"SeoAudit"> | number
    websiteId?: IntFilter<"SeoAudit"> | number
    healthScore?: IntFilter<"SeoAudit"> | number
    criticalCount?: IntFilter<"SeoAudit"> | number
    warningCount?: IntFilter<"SeoAudit"> | number
    noticeCount?: IntFilter<"SeoAudit"> | number
    pagesCrawled?: IntFilter<"SeoAudit"> | number
    issues?: JsonFilter<"SeoAudit">
    createdAt?: DateTimeFilter<"SeoAudit"> | Date | string
  }

  export type KeywordUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: KeywordWhereUniqueInput
    update: XOR<KeywordUpdateWithoutWebsiteInput, KeywordUncheckedUpdateWithoutWebsiteInput>
    create: XOR<KeywordCreateWithoutWebsiteInput, KeywordUncheckedCreateWithoutWebsiteInput>
  }

  export type KeywordUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: KeywordWhereUniqueInput
    data: XOR<KeywordUpdateWithoutWebsiteInput, KeywordUncheckedUpdateWithoutWebsiteInput>
  }

  export type KeywordUpdateManyWithWhereWithoutWebsiteInput = {
    where: KeywordScalarWhereInput
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type KeywordScalarWhereInput = {
    AND?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
    OR?: KeywordScalarWhereInput[]
    NOT?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
    id?: IntFilter<"Keyword"> | number
    websiteId?: IntFilter<"Keyword"> | number
    term?: StringFilter<"Keyword"> | string
    volume?: IntFilter<"Keyword"> | number
    difficulty?: IntFilter<"Keyword"> | number
    cpc?: StringFilter<"Keyword"> | string
    intent?: StringFilter<"Keyword"> | string
    cluster?: StringNullableFilter<"Keyword"> | string | null
    status?: StringFilter<"Keyword"> | string
    createdAt?: DateTimeFilter<"Keyword"> | Date | string
  }

  export type BlogPostUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutWebsiteInput, BlogPostUncheckedUpdateWithoutWebsiteInput>
    create: XOR<BlogPostCreateWithoutWebsiteInput, BlogPostUncheckedCreateWithoutWebsiteInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutWebsiteInput, BlogPostUncheckedUpdateWithoutWebsiteInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutWebsiteInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    OR?: BlogPostScalarWhereInput[]
    NOT?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    id?: IntFilter<"BlogPost"> | number
    websiteId?: IntFilter<"BlogPost"> | number
    title?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    targetKeyword?: StringFilter<"BlogPost"> | string
    wordCount?: IntFilter<"BlogPost"> | number
    content?: StringFilter<"BlogPost"> | string
    metaTitle?: StringNullableFilter<"BlogPost"> | string | null
    metaDescription?: StringNullableFilter<"BlogPost"> | string | null
    schemaJson?: StringNullableFilter<"BlogPost"> | string | null
    status?: StringFilter<"BlogPost"> | string
    wpPostId?: IntNullableFilter<"BlogPost"> | number | null
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
  }

  export type CompetitorUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: CompetitorWhereUniqueInput
    update: XOR<CompetitorUpdateWithoutWebsiteInput, CompetitorUncheckedUpdateWithoutWebsiteInput>
    create: XOR<CompetitorCreateWithoutWebsiteInput, CompetitorUncheckedCreateWithoutWebsiteInput>
  }

  export type CompetitorUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: CompetitorWhereUniqueInput
    data: XOR<CompetitorUpdateWithoutWebsiteInput, CompetitorUncheckedUpdateWithoutWebsiteInput>
  }

  export type CompetitorUpdateManyWithWhereWithoutWebsiteInput = {
    where: CompetitorScalarWhereInput
    data: XOR<CompetitorUpdateManyMutationInput, CompetitorUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type CompetitorScalarWhereInput = {
    AND?: CompetitorScalarWhereInput | CompetitorScalarWhereInput[]
    OR?: CompetitorScalarWhereInput[]
    NOT?: CompetitorScalarWhereInput | CompetitorScalarWhereInput[]
    id?: IntFilter<"Competitor"> | number
    websiteId?: IntFilter<"Competitor"> | number
    name?: StringFilter<"Competitor"> | string
    domain?: StringFilter<"Competitor"> | string
    traffic?: StringFilter<"Competitor"> | string
    dr?: IntFilter<"Competitor"> | number
    keywordsCount?: IntFilter<"Competitor"> | number
    backlinksCount?: IntFilter<"Competitor"> | number
    createdAt?: DateTimeFilter<"Competitor"> | Date | string
  }

  export type AnalyticsReportUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: AnalyticsReportWhereUniqueInput
    update: XOR<AnalyticsReportUpdateWithoutWebsiteInput, AnalyticsReportUncheckedUpdateWithoutWebsiteInput>
    create: XOR<AnalyticsReportCreateWithoutWebsiteInput, AnalyticsReportUncheckedCreateWithoutWebsiteInput>
  }

  export type AnalyticsReportUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: AnalyticsReportWhereUniqueInput
    data: XOR<AnalyticsReportUpdateWithoutWebsiteInput, AnalyticsReportUncheckedUpdateWithoutWebsiteInput>
  }

  export type AnalyticsReportUpdateManyWithWhereWithoutWebsiteInput = {
    where: AnalyticsReportScalarWhereInput
    data: XOR<AnalyticsReportUpdateManyMutationInput, AnalyticsReportUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type AnalyticsReportScalarWhereInput = {
    AND?: AnalyticsReportScalarWhereInput | AnalyticsReportScalarWhereInput[]
    OR?: AnalyticsReportScalarWhereInput[]
    NOT?: AnalyticsReportScalarWhereInput | AnalyticsReportScalarWhereInput[]
    id?: IntFilter<"AnalyticsReport"> | number
    websiteId?: IntFilter<"AnalyticsReport"> | number
    totalClicks?: IntFilter<"AnalyticsReport"> | number
    impressions?: IntFilter<"AnalyticsReport"> | number
    ctr?: FloatFilter<"AnalyticsReport"> | number
    avgPosition?: FloatFilter<"AnalyticsReport"> | number
    createdAt?: DateTimeFilter<"AnalyticsReport"> | Date | string
  }

  export type WebsiteCreateWithoutAuditsInput = {
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    keywords?: KeywordCreateNestedManyWithoutWebsiteInput
    blogs?: BlogPostCreateNestedManyWithoutWebsiteInput
    competitors?: CompetitorCreateNestedManyWithoutWebsiteInput
    reports?: AnalyticsReportCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateWithoutAuditsInput = {
    id?: number
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    keywords?: KeywordUncheckedCreateNestedManyWithoutWebsiteInput
    blogs?: BlogPostUncheckedCreateNestedManyWithoutWebsiteInput
    competitors?: CompetitorUncheckedCreateNestedManyWithoutWebsiteInput
    reports?: AnalyticsReportUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteCreateOrConnectWithoutAuditsInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutAuditsInput, WebsiteUncheckedCreateWithoutAuditsInput>
  }

  export type WebsiteUpsertWithoutAuditsInput = {
    update: XOR<WebsiteUpdateWithoutAuditsInput, WebsiteUncheckedUpdateWithoutAuditsInput>
    create: XOR<WebsiteCreateWithoutAuditsInput, WebsiteUncheckedCreateWithoutAuditsInput>
    where?: WebsiteWhereInput
  }

  export type WebsiteUpdateToOneWithWhereWithoutAuditsInput = {
    where?: WebsiteWhereInput
    data: XOR<WebsiteUpdateWithoutAuditsInput, WebsiteUncheckedUpdateWithoutAuditsInput>
  }

  export type WebsiteUpdateWithoutAuditsInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywords?: KeywordUpdateManyWithoutWebsiteNestedInput
    blogs?: BlogPostUpdateManyWithoutWebsiteNestedInput
    competitors?: CompetitorUpdateManyWithoutWebsiteNestedInput
    reports?: AnalyticsReportUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateWithoutAuditsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywords?: KeywordUncheckedUpdateManyWithoutWebsiteNestedInput
    blogs?: BlogPostUncheckedUpdateManyWithoutWebsiteNestedInput
    competitors?: CompetitorUncheckedUpdateManyWithoutWebsiteNestedInput
    reports?: AnalyticsReportUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteCreateWithoutKeywordsInput = {
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: SeoAuditCreateNestedManyWithoutWebsiteInput
    blogs?: BlogPostCreateNestedManyWithoutWebsiteInput
    competitors?: CompetitorCreateNestedManyWithoutWebsiteInput
    reports?: AnalyticsReportCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateWithoutKeywordsInput = {
    id?: number
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: SeoAuditUncheckedCreateNestedManyWithoutWebsiteInput
    blogs?: BlogPostUncheckedCreateNestedManyWithoutWebsiteInput
    competitors?: CompetitorUncheckedCreateNestedManyWithoutWebsiteInput
    reports?: AnalyticsReportUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteCreateOrConnectWithoutKeywordsInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutKeywordsInput, WebsiteUncheckedCreateWithoutKeywordsInput>
  }

  export type WebsiteUpsertWithoutKeywordsInput = {
    update: XOR<WebsiteUpdateWithoutKeywordsInput, WebsiteUncheckedUpdateWithoutKeywordsInput>
    create: XOR<WebsiteCreateWithoutKeywordsInput, WebsiteUncheckedCreateWithoutKeywordsInput>
    where?: WebsiteWhereInput
  }

  export type WebsiteUpdateToOneWithWhereWithoutKeywordsInput = {
    where?: WebsiteWhereInput
    data: XOR<WebsiteUpdateWithoutKeywordsInput, WebsiteUncheckedUpdateWithoutKeywordsInput>
  }

  export type WebsiteUpdateWithoutKeywordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: SeoAuditUpdateManyWithoutWebsiteNestedInput
    blogs?: BlogPostUpdateManyWithoutWebsiteNestedInput
    competitors?: CompetitorUpdateManyWithoutWebsiteNestedInput
    reports?: AnalyticsReportUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateWithoutKeywordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: SeoAuditUncheckedUpdateManyWithoutWebsiteNestedInput
    blogs?: BlogPostUncheckedUpdateManyWithoutWebsiteNestedInput
    competitors?: CompetitorUncheckedUpdateManyWithoutWebsiteNestedInput
    reports?: AnalyticsReportUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteCreateWithoutCompetitorsInput = {
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: SeoAuditCreateNestedManyWithoutWebsiteInput
    keywords?: KeywordCreateNestedManyWithoutWebsiteInput
    blogs?: BlogPostCreateNestedManyWithoutWebsiteInput
    reports?: AnalyticsReportCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateWithoutCompetitorsInput = {
    id?: number
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: SeoAuditUncheckedCreateNestedManyWithoutWebsiteInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutWebsiteInput
    blogs?: BlogPostUncheckedCreateNestedManyWithoutWebsiteInput
    reports?: AnalyticsReportUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteCreateOrConnectWithoutCompetitorsInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutCompetitorsInput, WebsiteUncheckedCreateWithoutCompetitorsInput>
  }

  export type WebsiteUpsertWithoutCompetitorsInput = {
    update: XOR<WebsiteUpdateWithoutCompetitorsInput, WebsiteUncheckedUpdateWithoutCompetitorsInput>
    create: XOR<WebsiteCreateWithoutCompetitorsInput, WebsiteUncheckedCreateWithoutCompetitorsInput>
    where?: WebsiteWhereInput
  }

  export type WebsiteUpdateToOneWithWhereWithoutCompetitorsInput = {
    where?: WebsiteWhereInput
    data: XOR<WebsiteUpdateWithoutCompetitorsInput, WebsiteUncheckedUpdateWithoutCompetitorsInput>
  }

  export type WebsiteUpdateWithoutCompetitorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: SeoAuditUpdateManyWithoutWebsiteNestedInput
    keywords?: KeywordUpdateManyWithoutWebsiteNestedInput
    blogs?: BlogPostUpdateManyWithoutWebsiteNestedInput
    reports?: AnalyticsReportUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateWithoutCompetitorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: SeoAuditUncheckedUpdateManyWithoutWebsiteNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutWebsiteNestedInput
    blogs?: BlogPostUncheckedUpdateManyWithoutWebsiteNestedInput
    reports?: AnalyticsReportUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteCreateWithoutBlogsInput = {
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: SeoAuditCreateNestedManyWithoutWebsiteInput
    keywords?: KeywordCreateNestedManyWithoutWebsiteInput
    competitors?: CompetitorCreateNestedManyWithoutWebsiteInput
    reports?: AnalyticsReportCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateWithoutBlogsInput = {
    id?: number
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: SeoAuditUncheckedCreateNestedManyWithoutWebsiteInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutWebsiteInput
    competitors?: CompetitorUncheckedCreateNestedManyWithoutWebsiteInput
    reports?: AnalyticsReportUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteCreateOrConnectWithoutBlogsInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutBlogsInput, WebsiteUncheckedCreateWithoutBlogsInput>
  }

  export type WebsiteUpsertWithoutBlogsInput = {
    update: XOR<WebsiteUpdateWithoutBlogsInput, WebsiteUncheckedUpdateWithoutBlogsInput>
    create: XOR<WebsiteCreateWithoutBlogsInput, WebsiteUncheckedCreateWithoutBlogsInput>
    where?: WebsiteWhereInput
  }

  export type WebsiteUpdateToOneWithWhereWithoutBlogsInput = {
    where?: WebsiteWhereInput
    data: XOR<WebsiteUpdateWithoutBlogsInput, WebsiteUncheckedUpdateWithoutBlogsInput>
  }

  export type WebsiteUpdateWithoutBlogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: SeoAuditUpdateManyWithoutWebsiteNestedInput
    keywords?: KeywordUpdateManyWithoutWebsiteNestedInput
    competitors?: CompetitorUpdateManyWithoutWebsiteNestedInput
    reports?: AnalyticsReportUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: SeoAuditUncheckedUpdateManyWithoutWebsiteNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutWebsiteNestedInput
    competitors?: CompetitorUncheckedUpdateManyWithoutWebsiteNestedInput
    reports?: AnalyticsReportUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteCreateWithoutReportsInput = {
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: SeoAuditCreateNestedManyWithoutWebsiteInput
    keywords?: KeywordCreateNestedManyWithoutWebsiteInput
    blogs?: BlogPostCreateNestedManyWithoutWebsiteInput
    competitors?: CompetitorCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateWithoutReportsInput = {
    id?: number
    name: string
    domain: string
    country?: string | null
    industry?: string | null
    language?: string | null
    status?: string
    seoScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: SeoAuditUncheckedCreateNestedManyWithoutWebsiteInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutWebsiteInput
    blogs?: BlogPostUncheckedCreateNestedManyWithoutWebsiteInput
    competitors?: CompetitorUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteCreateOrConnectWithoutReportsInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutReportsInput, WebsiteUncheckedCreateWithoutReportsInput>
  }

  export type WebsiteUpsertWithoutReportsInput = {
    update: XOR<WebsiteUpdateWithoutReportsInput, WebsiteUncheckedUpdateWithoutReportsInput>
    create: XOR<WebsiteCreateWithoutReportsInput, WebsiteUncheckedCreateWithoutReportsInput>
    where?: WebsiteWhereInput
  }

  export type WebsiteUpdateToOneWithWhereWithoutReportsInput = {
    where?: WebsiteWhereInput
    data: XOR<WebsiteUpdateWithoutReportsInput, WebsiteUncheckedUpdateWithoutReportsInput>
  }

  export type WebsiteUpdateWithoutReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: SeoAuditUpdateManyWithoutWebsiteNestedInput
    keywords?: KeywordUpdateManyWithoutWebsiteNestedInput
    blogs?: BlogPostUpdateManyWithoutWebsiteNestedInput
    competitors?: CompetitorUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateWithoutReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    seoScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: SeoAuditUncheckedUpdateManyWithoutWebsiteNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutWebsiteNestedInput
    blogs?: BlogPostUncheckedUpdateManyWithoutWebsiteNestedInput
    competitors?: CompetitorUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type SeoAuditCreateManyWebsiteInput = {
    id?: number
    healthScore?: number
    criticalCount?: number
    warningCount?: number
    noticeCount?: number
    pagesCrawled?: number
    issues: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type KeywordCreateManyWebsiteInput = {
    id?: number
    term: string
    volume?: number
    difficulty?: number
    cpc?: string
    intent?: string
    cluster?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type BlogPostCreateManyWebsiteInput = {
    id?: number
    title: string
    slug: string
    targetKeyword: string
    wordCount?: number
    content: string
    metaTitle?: string | null
    metaDescription?: string | null
    schemaJson?: string | null
    status?: string
    wpPostId?: number | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitorCreateManyWebsiteInput = {
    id?: number
    name: string
    domain: string
    traffic?: string
    dr?: number
    keywordsCount?: number
    backlinksCount?: number
    createdAt?: Date | string
  }

  export type AnalyticsReportCreateManyWebsiteInput = {
    id?: number
    totalClicks?: number
    impressions?: number
    ctr?: number
    avgPosition?: number
    createdAt?: Date | string
  }

  export type SeoAuditUpdateWithoutWebsiteInput = {
    healthScore?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    noticeCount?: IntFieldUpdateOperationsInput | number
    pagesCrawled?: IntFieldUpdateOperationsInput | number
    issues?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoAuditUncheckedUpdateWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    healthScore?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    noticeCount?: IntFieldUpdateOperationsInput | number
    pagesCrawled?: IntFieldUpdateOperationsInput | number
    issues?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoAuditUncheckedUpdateManyWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    healthScore?: IntFieldUpdateOperationsInput | number
    criticalCount?: IntFieldUpdateOperationsInput | number
    warningCount?: IntFieldUpdateOperationsInput | number
    noticeCount?: IntFieldUpdateOperationsInput | number
    pagesCrawled?: IntFieldUpdateOperationsInput | number
    issues?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordUpdateWithoutWebsiteInput = {
    term?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    cpc?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordUncheckedUpdateWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    cpc?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordUncheckedUpdateManyWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    volume?: IntFieldUpdateOperationsInput | number
    difficulty?: IntFieldUpdateOperationsInput | number
    cpc?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUpdateWithoutWebsiteInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    targetKeyword?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    schemaJson?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    wpPostId?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    targetKeyword?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    schemaJson?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    wpPostId?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    targetKeyword?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    schemaJson?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    wpPostId?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorUpdateWithoutWebsiteInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    traffic?: StringFieldUpdateOperationsInput | string
    dr?: IntFieldUpdateOperationsInput | number
    keywordsCount?: IntFieldUpdateOperationsInput | number
    backlinksCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorUncheckedUpdateWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    traffic?: StringFieldUpdateOperationsInput | string
    dr?: IntFieldUpdateOperationsInput | number
    keywordsCount?: IntFieldUpdateOperationsInput | number
    backlinksCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorUncheckedUpdateManyWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    traffic?: StringFieldUpdateOperationsInput | string
    dr?: IntFieldUpdateOperationsInput | number
    keywordsCount?: IntFieldUpdateOperationsInput | number
    backlinksCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsReportUpdateWithoutWebsiteInput = {
    totalClicks?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    avgPosition?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsReportUncheckedUpdateWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalClicks?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    avgPosition?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsReportUncheckedUpdateManyWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalClicks?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    avgPosition?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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