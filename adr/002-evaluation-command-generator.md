# Implement the evaluation loop as a generator returning simple command requests

## Decision

The main evaluation system should be implemented such that:

- Evaluation is done through a generator.
- The generator intermediate steps should be simple javascript objects indiciating requests for further parsing.

## Justification

Fine-grained control of the execution is a greatly desired feature for a scripting language. The evaluator should be able to pause, resume, and provide introspection into the evaluation of the script. This is a crucial feature to enable the following high-level features:

- Limitations on stack size
- Limitations on instruction counts (For example, halting infinite loops)
- Pausing and resuming execution (For example, debugger statements)
- Analyzing the current execution (For example, getting the current line and character numbers of the instruction that is being executed or is paused at)

All of this can be accomplished if:

- The evaluation loop uses generators, which can be paused and aborted
- The generators yield requests for further execution, instead of directly invoking the execution

This may have some consiquences for performance, but the ability to control and introspect the execution provides a significant value, and execution performance is secondary to that.
